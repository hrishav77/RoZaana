const mongoose=require('mongoose')
const goalSchema=new mongoose.Schema({
    goaltitle:{
        type:String
    },
    duration:{
        type:Number
    },
    time:{
        type:String
    }

}, {timestamps:true})

module.exports=mongoose.model("Goal",goalSchema)