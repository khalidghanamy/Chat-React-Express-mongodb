const Users =require("../model/userModel")
const brcypt= require("bcrypt")

const sendError=(data)=>{
    if(!data)
    return res.json({msg:"Incorrect username or password",status:false})
}
module.exports={
    
    register:async (req,res,next)=>{
const {username,email,password}=req.body
try {
    
const usernameCheck = await Users.findOne({username})

if(usernameCheck)
return res.json({msg:"user already exist",status:false})


const emailCheck =await Users.findOne({email})
console.log(email,emailCheck);
if(emailCheck)
return res.json({msg:"email already exist",status:false})

const hashedPassword=await brcypt.hash(password,10);
const user =await Users.create({
    username,
    email,
    password:hashedPassword
})
delete user.password;
return res.json({status:true,user})

} catch (error) {
    next(error)
}
},

login:async (req,res,next)=>{
    const {username,password}=req.body
    try {
        
    const user = await Users.findOne({username})
    
    if(!user)
    return res.json({msg:"Incorrect username or password",status:false})
    const isPasswordValid= await brcypt.compare(password,user.password)

    sendError(isPasswordValid);
    delete user.password;  
    return res.json({status:true,user})
    
    } catch (error) {
        next(error)
    }
    }



}