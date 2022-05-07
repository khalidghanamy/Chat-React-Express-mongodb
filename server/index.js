const express= require("express");
const mongoose = require("mongoose")
const cors =require("cors")
const userRoutes=require("./routes/userRoutes")
const bodyParser =require ('body-parser');

const app=express()
require("dotenv").config();

app.use(cors());
app.use(express.json)
app.use(bodyParser.json({limit:"30mb",extended: true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended: true}))

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



app.use("/api/auth",userRoutes)