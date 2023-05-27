require('dotenv').config()
const express=require('express')
const app=express()
const mongoose=require('mongoose')
const cors=require("cors")
const goalRoutes=require('./routes/goals')
const userRoutes=require("./routes/user")

app.use(cors());
app.use(express.json())
app.get("/",(req,res)=>{
res.json({mssg:"welcome to the server"})
})

app.use('/api/goals',goalRoutes)
app.use('/api/users',userRoutes)


//connect to db
mongoose.connect(process.env.MONG_URL).then(()=>{
    app.listen(process.env.PORT||4000,()=>{
        console.log(" connected to db and server running on ",process.env.PORT)
    })
}).catch((err)=>{
    console.log(err)
})

