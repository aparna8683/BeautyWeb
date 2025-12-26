import express from 'express'
const app=express();
const Port=8080;
app.listen((Port),(req,res)=>{
    console.log("Server is running on Port", Port)
})