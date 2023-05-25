const mongoose=require('mongoose')
const bcrypt=require("bcrypt")
const validator=require("validator")
const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }

})

//static is used to create our own method
userSchema.statics.signup=async function(email,password){ //this cant be a arrow function

 if(!email||!password){
    throw Error("all fields must be filled")
 }   
if(!validator.isEmail(email)){
    throw Error("email is not valid")
}
if(!validator.isStrongPassword(password)){
    throw Error("password not strong enough")
}

const exist= await this.findOne({email})//here this means the model
if(exist){
    throw Error("email already in use")
}

const salt=await bcrypt.genSalt(10)//higher the number more time it will take for hacker but also signup becomes slow
const hash=await bcrypt.hash(password,salt)

const user=await this.create({email,password:hash})
return user;
}

module.exports=mongoose.model("User",userSchema)