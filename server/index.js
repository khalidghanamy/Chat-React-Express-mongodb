const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const userRoutes = require("./routes/userRoutes");
const messageRoute = require("./routes/messageRoute");
const body_parser = require("body-parser");
const socket =require("socket.io");
const { mapReduce } = require("./model/messageModel");

const app = express();
require("dotenv").config();
const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});

app.use(cors());
app.use(body_parser.json());
app.use(body_parser.urlencoded({ extended: false }));

const server = app.listen(process.env.PORT, () => {
    console.log("running");
});
mongoose
.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log("connected");
})
.catch((err) => {
    console.log(err.message);
});

// establish connection
const clientHost = "http://localhost:3000"
const io = socket(server,{
  origin:clientHost,
  credentials:true
})

//create global store for users
global.onlineUsers= new Map();

//when there is a connection - store socket in global chat socket
// emit add user from front end whenever user is online we well add both to global map
io.on("connection",(socket)=>{
  global.chatSocket = socket;
  socket.on("add-user",(userId)=>{
    onlineUsers.set(userId,socket.id)
  })
  
  // on send-msg event from front end
  // we gonna send msg to online user
  // or if he is online we well save it tp data base
  // and when he back online he will recieved the msg
  socket.on("send-msg",(data)=>{
    const sendUserSocket =onlineUsers.get(data.to)
    if(sendUserSocket){
      socket.to(sendUserSocket).emit("msg-recieve",data.msg)
    }
  })
  app.use("/api/auth", userRoutes);
})
app.use("/api/messages", messageRoute);


app.use((err,req,res,next)=>{
  res.status(500).json({Error:err})
})