const passport = require('passport');
const kakaoStrategy = require('passport-kakao').Strategy;
const user = require('../Models/User');
const {serverURL} = require('../modules/serverConst')

module.exports = ()=>{
    passport.use(new kakaoStrategy({
        clientID: process.env.REST_API,
        callbackURL: `${serverURL}/oauth`,
    },async(accessToken,refreshToken,profile,done)=>{
        console.log('kakaoprofile',profile)
        try{
            const exuser = await user.findOne({
                kakaoId:profile.id.toString()
            });
            if(exuser){
                done(null,exuser);
            }else{
                const newuser = await user.create({
                    kakaoId: profile.id.toString(),
                    nickname: profile.username
                });
                done(null,newuser);
            }
        }catch(err){
            console.error(err);
            done(err);
        }
    }))
}