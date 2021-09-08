const {local} = require('./localStrategy');
const kakao = require('./kakaoStrategy');
const User = require('../Models/User');

module.exports = (passport)=>{

    passport.serializeUser((user,done)=>{
        console.log('serialize',user);
        done(null,user.id);
    });

    passport.deserializeUser(async(id,done)=>{
        try{
            const user = await User.findById(id);
            done(null,user);
        }catch(err){
            console.error(err);
            done(err);
        }
    });

    local(passport);
    kakao(passport);

}