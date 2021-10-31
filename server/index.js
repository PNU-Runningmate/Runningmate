const express = require('express');
const app = express();
const httpServer = require("http").createServer(app);
const wsServer =require("socket.io")(httpServer,{cors:{origin:"*"}});


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

app.use(session({
    name:'session_id',
    secret: process.env.COOKIE_SECRET,
    resave:false,
    saveUninitialized:false,
    cookie:{
        httpOnly:true,
        secure:false,
    }
})
);

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

//여기 고쳐보자!!!
app.get('/waiting',(req,res)=>{
    console.log('hihihihi');
}); 

//db연결
mongoose.connect(process.env.MONGO_URL,(err)=>{
    if(err){
        console.log('mongodb connection error');
    }
    console.log('mongodb connected');
})



wsServer.on("connection",(socket)=>{
    console.log("소켓 접속 완료!");
    socket['nickname']="Anon";
    socket.join('123');

    socket.onAny((event)=>{
        console.log(`Socket Event:${event}`);
    });

    socket.on("new_message",(message,roonName, done) => {
        socket.to(roonName).emit("new_message",`${socket.nickname} : ${message}`);
        done();
    });
});

//서버 on
httpServer.listen(process.env.PORT || 5000,()=>{
    console.log(`the server listen on ${process.env.PORT || 5000}`);
})

