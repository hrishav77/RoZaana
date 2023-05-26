const mongoose=require('mongoose')
const goalSchema=new mongoose.Schema({
    goaltitle:{
        type:String,
        required:true
    },
    duration:{
        type:Number,
        required:true
    },
    time:{
        type:String,
        
    },
    user_id:{
        type:String,
        required:true
    }

}, {timestamps:true})

module.exports=mongoose.model("Goal",goalSchema)