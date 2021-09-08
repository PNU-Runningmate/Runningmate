const isLoggedin = (req,res,next)=>{
    console.log(req.headers);
    console.log(req.isAuthenticated())
    if (req.isAuthenticated()){
        next();
    }else{
        res.status(403).json({message:'로그인 필요'});
    }
};

const isNotLoggedin = (req,res,next)=>{
    console.log(req.headers);
    if(!req.isAuthenticated()){
        next();
    }else{
        res.status(403).send('이미 로그인된 사용자입니다.')
        console.log('로그인된유저임')
    }
};

exports.isLoggedin = isLoggedin;
exports.isNotLoggedin = isNotLoggedin;