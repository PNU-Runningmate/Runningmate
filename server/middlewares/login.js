const isLoggedin = (req,res,next)=>{
    if (req.isAuthenticated()){
        next();
    }else{
        console.log('로그인필요')
        res.status(403).json({message:'로그인 필요'});
    }
};

const isNotLoggedin = (req,res,next)=>{
    if(!req.isAuthenticated()){
        next();
    }else{
        res.redirect("http://localhost:3000/main");
        console.log('로그인된유저임')
    }
};

exports.isLoggedin = isLoggedin;
exports.isNotLoggedin = isNotLoggedin;