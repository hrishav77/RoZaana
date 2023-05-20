const express=require('express')
const router=express.Router()

router.get('/',(req,res)=>{
res.json({mssg:"get all goals"})
})
router.get("/:id",(req,res)=>{
    res.json({mssg:"get goal by id"})
})
router.post("/",(req,res)=>{
    res.json({mssg:"post a goal"})
})
router.delete("/",(req,res)=>{
    res.json({mssg:"delete a goal"})
})
router.patch("/",(req,res)=>{
    res.json({mssg:"update a goal"})
})
module.exports=router 