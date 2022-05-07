const express= require("express");
const mongoose = require("mongoose")
const cors =require("cors")




const app=express()
require("dotenv").config();

app.use(cors());
app.use(express.json)

const server= app.listen(process.env.PORT,()=>{
    console.log("running");
})

mongoose.connect(process.env.MONGO_URL,{
    useNewUrlParser:true,
    useUnifiedTopology :true,
}).then(()=>{
console.log("connected");
}).catch((err)=>{
    console.log(err.message);
})