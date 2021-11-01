const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    nickname:{
        type:String,
    },
    kakaoId:{
        type:String
    }
},
{timestamps:true});


UserSchema.methods.findByUsername = async (email)=>{
    const user = await this.findOne({email});
    return user
}

module.exports = mongoose.model('User',UserSchema);


