
const mongoose=require('mongoose');

const userSchema= new mongoose.Schema({
    username:{
        type:String,
        min:3,
        max:20,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        max:50,
        unique:true,

    },
    password:{
        type:String,
        required:true,
        min:8,
    },
    isAvatarImage:{
        type:String,
        default:"",
    }
});



module.exports=mongoose.model("Users",userSchema)