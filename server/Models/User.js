const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    nickname:{
        type:String,
    },
    kakaoId:{
        type:String
    },
    records:[
            {type:mongoose.Schema.Types.ObjectId,ref:'Record'}
        ],
},
{timestamps:true});


UserSchema.methods.findByUsername = async (email)=>{
    const user = await this.findOne({email});
    return user
}

module.exports = mongoose.model('User',UserSchema);


