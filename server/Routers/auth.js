const express = require('express');
const User = require('../Models/User');
const authRouter = express.Router();
const passport = require('passport');
const bcrpyt = require('bcrypt')
const { isLoggedin,isNotLoggedin} = require('../middlewares/login');

authRouter.post('/signup',isNotLoggedin,async (req,res,next)=>{
    const { email,password} = req.body;
    try{
        const exuser = await User.findOne({email});
        if(exuser){
            req.flash('SignupError','이미 가입된 이메일입니다.');
            res.status(403).json('이미 가입된 이메일입니다.');
        }else{
            const hasedpassword = await bcrpyt.hash(password,12);
            await User.create({ email,password:hasedpassword});
            res.status(200).json('회원가입되었습니다')
        }
    }catch(err){
        console.log(err);
        next(err);
    }
})

authRouter.post('/login',isNotLoggedin,async (req,res,next)=>{
    passport.authenticate("local",(err,user,info)=>{
        if(err){
            console.log(err);
            return next(err);
        }
        if(!user){
            console.log(info.message)
            return res.status(403).json(info.message);
        }       
        return req.login(user,err=>{
            if(err){
                console.log(err);
                return next(err);
            }
            next()
        })
    })(req,res,next);
},(req,res)=>{
    res.status(200).json('로컬 로그인 되었습니다')
});

authRouter.get("/logout",isLoggedin,(req,res)=>{
    req.logout();
    res.status(200).json('로그아웃되었습니다.')
})

authRouter.get('/kakao',isNotLoggedin,passport.authenticate('kakao',{
    failureRedirect:'/',
}));

module.exports = authRouter;