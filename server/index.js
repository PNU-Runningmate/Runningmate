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
const Record = require('./Models/Record');
const {clientURL} = require('./modules/serverConst')
const {serverURL} = require('./modules/serverConst')



app.use(cors({origin:`${clientURL}`,credentials:true}));
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
    res.redirect(`${clientURL}/main`)
})


app.get('/main',(req,res)=>{
        try{
            res.json({"nickname":req.user.nickname})
        }catch(e){
            res.status(400).json({'error':'로그인이 필요합니다.'})
        }
})
//유저 최근 기록
app.get('/latest',async (req,res)=>{
    try{
        const record = await Record.find({author:req.user});
        res.json({"latest_record":record[record.length-1]})
    }catch(e){
        console.log(e)
    }
})
//랭크
app.get('/rank',async(req,res)=>{
    const {ranklength} = req.query;
    try{
        const record = await Record.find({roomlength:ranklength,length:{$gte:ranklength.slice(0,ranklength.length-2)}}).sort({runningtime:1})
        console.log(record)
    }catch(e){
        console.log(e)
    }
})

app.get('/room',isLoggedin,(req,res)=>{
    res.json({status_code:200})
});

//방url 생성
app.get('/test',isLoggedin,(req,res)=>{
    const {length,title} = req.query;
    const randomnumber = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    res.json({
        "redirect_url":`?room_id=${randomnumber}&title=${title}&length=${length}`,
    })
})
//인포페이지 날짜별 기록 정보 
app.get("/date",isLoggedin,async (req,res)=>{
    const {rday} = req.query;
    const start = new Date(rday);
    const setend = new Date(rday);
    const end = new Date(setend.setDate(start.getDate()+1));

    try{
        const record = await Record.find({
            author: req.user,
            createdAt: {$gte: start,$lt: end}
        })
        res.json(record)
    }catch(e){
        console.log(e)
    }
})

//db연결
mongoose.connect(process.env.MONGO_URL,(err)=>{
    if(err){
        console.log('mongodb connection error');
    }
    console.log('mongodb connected');
})

//socket.io import
const options = {cors:{origin:`${clientURL}`,methods: ["GET","POST"],credentials:true},pingTimeout: 10000};
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
    socket.on("Loading",(length)=>{
        socket['Goal'] = length;
        io.in(roomId).emit('Start')
    })
    //좌표 기록 및 계산
    socket.on('Start',async (data)=>{
        location.push(data)
        console.log(`${socket.id}`,'location',location)
        socket['starttime'] = new Date(Date.now())
        if(socket.Before == undefined){
            socket['Before'] = {'longitude': data.longitude ,'latitude':data.latitude};
            try{
            const data = await io.in(roomId).fetchSockets();
            let UserList = [];
            data.forEach(i=>{
                UserList.push({"nickname":i.nickname,"status":i.status,"distance":0});
                })
                io.in(roomId).emit("Running",UserList);
            }catch(e){
                console.log(e)
            }
        }else{
            socket.distance += await computeDistance(socket.Before,data);
            socket.Before = data;
            //방에 참여된 유저들 거리정보 뿌려주기
            if(socket.Goal <= socket.distance){
                socket.emit('arrive');
            }else{
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
        }
    })
    socket.on('arrive',async ()=>{
        socket['endtime']= new Date(Date.now())
        const time = (socket.endtime.getTime()-socket.starttime.getTime())/1000/60/60
        await Record.create({
                author: socket.request.user.id,
                location: location,
                runningtime: time.toFixed(2),
                length: socket.distance.toFixed(4),
                pace: time/socket.distance.toFixed(2),
                roomlength:socket.Goal
            })
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

