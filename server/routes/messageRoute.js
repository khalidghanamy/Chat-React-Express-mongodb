const {addMessage,getAllmessages}= require("../controllers/messageController") 
const express =require("express");



const router=express.Router();
router.post("/addmsg",addMessage)
router.post("/getallmsg",getAllmessages)


module.exports=router