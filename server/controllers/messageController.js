
const Messages =require("../model/messageModel")
module.exports.addMessage=async (req,res,next)=>{

    try {
const {from,to,message}= req.body;
const data =await Messages.create({
    message:{text:message},
    users:{from,to},
    sender:from

});
if(data) return res.json({msg:"message add successfully"})
return res.json({msg: "failed to add messages"})
    } catch (error) {

        next(error)
    }
}
module.exports.getAllmessages=async (req,res,next)=>{}