const mongoose = require('mongoose');

const RecordSchema = new mongoose.Schema({
    author:{
        type:mongoose.Schema.Types.ObjectId,ref:'User',
        required:true
    },
    location:{
        type:Array
    },
    length:{
        type:String
    },
    pace:{
        type:String
    },
    runningtime:{
        type:String
    }
},{timestamps:true});


module.exports = mongoose.model('Record',RecordSchema);