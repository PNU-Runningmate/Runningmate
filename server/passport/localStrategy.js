const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const User = require('../Models/User');

const local = (passport)=>{
    passport.use(
        new LocalStrategy({
            usernameField:"email",
            passwordField:"password",
            session:true
        },
        async (email,password,done)=>{
            try{
                const exuser = await User.findOne({email:email});
                if(exuser){
                    const result = await bcrypt.compare(password,exuser.password);
                    if(result){
                        done(null,exuser);
                    }else{
                        done(null,false,{message:'비밀번호가 일치하지않습니다.'});
                    }
                }else{
                    done(null,false,{message:'가입되지않은 회원입니다.'});
                }
            }catch(err){
                console.log(err);
                done(err);
            }
        })
    )
}

exports.local = local;