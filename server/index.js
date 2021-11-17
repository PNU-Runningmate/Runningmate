const express = require('express');
const app = express();
const httpServer = require("http").createServer(app);
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');
const cookieparser = require('cookie-parser')
const passport = require('passport');
const flash = require('connect-flash');
const session = require('express-session');
const AuthRouter = require('./Routers/auth');
const passportConfig = require('./passport/index');
const cors = require('cors');
const {isLoggedin} = require('./middlewares/login');
const {computeDistance} = require('./modules/distance');


app.use(cors({origin:'http://localhost:3000',credentials:true}));
dotenv.config();
app.use(morgan('dev'));
app.use(helmet());
app.use(express.urlencoded({extended:true}));
app.use(express.json());


const sessionMiddleware = session({
    name:'session_id',
    secret: process.env.COOKIE_SECRET,
    resave:false,
    saveUninitialized:false,
    cookie:{
        httpOnly:true,
        secure:false,
    }
});

app.use(sessionMiddleware);
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passportConfig(passport);


//router
app.use('/api/auth',AuthRouter);

app.get('/oauth',passport.authenticate('kakao',{
    failureRedirect:'/',
}),(req,res)=>{
    res.redirect("http://localhost:3000/main")
})


app.get('/main',(req,res)=>{
    res.json(req.user.nickname);
})

app.get('/room',isLoggedin,(req,res)=>{
    res.json({status_code:200})
});

app.get('/test',(req,res)=>{
    const {length,title} = req.query;
    const randomnumber = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    res.json({
        "redirect_url":`?room_id=${randomnumber}&title=${title}&length=${length}`,
    })
})

//db연결
mongoose.connect(process.env.MONGO_URL,(err)=>{
    if(err){
        console.log('mongodb connection error');
    }
    console.log('mongodb connected');
})

//socket.io import
const options = {cors:{origin:"http://localhost:3000",methods: ["GET","POST"],credentials:true},pingTimeout: 10000};
const io =require("socket.io")(httpServer,options);
//compatibility with express middleware
const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);

io.use(wrap(sessionMiddleware));
io.use(wrap(passport.initialize()));
io.use(wrap(passport.session()));

io.use((socket,next)=>{
    if(socket.request.user){
        next();
    }else{
        next(new Error('unathorized'));
    }
})

//소켓
io.on("connection",(socket)=>{
    console.log("소켓 접속 완료!");
    socket.onAny((event)=>{
        console.log(`Socket Event:${event}`);
    });
    const {roomId} = socket.handshake.query;
    socket.join(roomId);
    console.log(socket.request.user.kakaoId);
    socket['nickname']=socket.request.user.nickname;
    socket['status'] = false;
    socket['distance'] = 0;
    let location = [];
    //유저 목록 재갱신
    socket.on('newUser',async ()=>{
        try{
        const data = await io.in(roomId).fetchSockets();
        let UserList = [];
        data.forEach(i=>{
            UserList.push({"nickname":i.nickname,"status":i.status});
            })
        io.in(roomId).emit("newUser",UserList);
        }catch(err){
            console.log(err)
        }
    })
    //준비 상태 및 유저목록 재갱신
    socket.on('Ready',async ()=>{
        socket.status = !socket.status
        try{
            const data = await io.in(roomId).fetchSockets();
            let UserList = [];
            data.forEach(i=>{
                UserList.push({"nickname":i.nickname,"status":i.status});
                })
                io.in(roomId).emit("Ready",UserList);
        }catch(e){
            console.log(e)
        }
    })
    //채팅메세지 listen
    socket.on("newChatMessage",(data)=>{
        const message = {...data,nickname:socket.nickname};
        io.in(roomId).emit("newChatMessage",message);
    });
    //모든 유저 geolocation 실행
    socket.on("Loading",()=>{
        io.in(roomId).emit('Start')
    })
    //좌표 기록 및 계산
    socket.on('Start',async (data)=>{
        location.push(data)
        console.log('location',location)
        if(socket.Before == undefined){
            socket['Before'] = {'longitude': data.longitude ,'latitude':data.latitude};
        }else{
            socket.distance += await computeDistance(socket.Before,data);
            socket.Before = data;
            //방에 참여된 유저들 거리정보 뿌려주기
            try{
                const data = await io.in(roomId).fetchSockets();
                let UserList = [];
                data.forEach(i=>{
                    UserList.push({"nickname":i.nickname,"status":i.status,"distance":i.distance});
                    })
                    io.in(roomId).emit("Running",UserList);
            }catch(e){
                console.log(e)
            }
        }
    })
    //소켓 연결 해제 listen
    socket.on('disconnect',()=>{
        console.log('disconnect');
        console.log(io.sockets.adapter.rooms);
        io.in(roomId).emit("userLeave")
    })
})

//서버 on
httpServer.listen(process.env.PORT || 5000,()=>{
    console.log(`the server listen on ${process.env.PORT || 5000}`);
})