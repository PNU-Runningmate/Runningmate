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
app.use(cors({origin:'http://localhost:3000',credentials:true}));
dotenv.config();
app.use(morgan('dev'));
app.use(helmet());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

// app.use(cookieparser());

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
app.get('/room',(req,res)=>{
    res.json(req.query.id);
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

io.on("connection",(socket)=>{
    console.log("소켓 접속 완료!");
    socket.onAny((event)=>{
        console.log(`Socket Event:${event}`);
    });
    socket['nickname']=socket.request.user.nickname;
    socket['Status'] = false;

    socket.on('CreateRoom',()=>{
        if(socket.rooms.size == 1){
            socket.emit('CreateRoom',`room_${socket.id}`);
        }
        else{
            socket.emit('Error','이미 방에 참여중입니다.',`room_${socket.id}`)
        }
    })
    socket.on('EnterRoom',(roomName)=>{
        if(socket.rooms.size == 1){
            socket.join(roomName);
        }
        console.log(io.sockets.adapter.rooms);
        const a = io.sockets.adapter.rooms.get(roomName);
        console.log(a);
        for(let i in a){
            console.log('hfdsahfdah')
            console.log(i);
        }
        socket.emit("EnterUser",socket.nickname);
    })
    //Ready
    socket.on('ready',(roomName)=>{
        socket['Status'] = true;
        io.to(roomName).emit('ready',socket.Status)
    })
    //if all ready
    socket.on('start',(roomName)=>{
        for(const socket in io.sockets.clients(`${roomName}`)){
            console.log(socket);
        }
    })
    
    
    //chat
    socket.on("new_message",(message,roonName, done) => {
        console.log(socket.nickname,message)
        socket.to(roonName).emit("new_message",`${socket.nickname} : ${message}`);
        done();
    });
    socket.on('disconnect',()=>{
        console.log('disconnect');
        console.log(io.sockets.adapter.rooms);
    })
});


//서버 on
httpServer.listen(process.env.PORT || 5000,()=>{
    console.log(`the server listen on ${process.env.PORT || 5000}`);
})

