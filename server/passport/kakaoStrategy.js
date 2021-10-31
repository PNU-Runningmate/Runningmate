const passport = require('passport');
const kakaoStrategy = require('passport-kakao').Strategy;
const user = require('../Models/User');

module.exports = ()=>{
    console.log("restapi",process.env.REST_API)
    passport.use(new kakaoStrategy({
        clientID: process.env.REST_API,
        callbackURL: 'http://localhost:5000/oauth',
    },async(accessToken,refreshToken,profile,done)=>{
        console.log('kakaoprofile',profile)
        try{
            const exuser = await user.findOne({
                id:profile.id
            });
            if(exuser){
                done(null,exuser);
            }else{
                const newuser = await user.create({
                    id: profile.id
                });
                done(null,newuser);
            }
        }catch(err){
            console.error(err);
            done(err);
        }
    }))
}