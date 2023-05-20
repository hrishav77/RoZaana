require('dotenv').config()
const express=require('express')
const app=express()

app.get("/",(req,res)=>{
res.json({mssg:"welcome to the server"})
})

app.listen(process.env.PORT,()=>{
    console.log("server running on ",process.env.PORT)
})