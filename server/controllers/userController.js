const Users = require("../model/userModel");
const brcypt = require("bcrypt");
//send error if not valid
const sendError = (data = 1, res = "") => {
  if (!data)
    return res.json({ msg: "Incorrect username or password", status: false });
};
module.exports = {
  register: async (req, res, next) => {
    const { username, email, password } = req.body;
    try {
      const usernameCheck = await Users.findOne({ username });

      sendError(!usernameCheck, res);

      const emailCheck = await Users.findOne({ email });
      console.log(email, emailCheck);
      sendError(!emailCheck, res);

      const hashedPassword = await brcypt.hash(password, 10);
      const user = await Users.create({
        username,
        email,
        password: hashedPassword,
      });
      delete user.password;
      return res.json({ status: true, user });
    } catch (error) {
      next(error);
    }
  },

  login: async (req, res, next) => {
    const { username, password } = req.body;
    try {
      const user = await Users.findOne({ username });

      sendError(user, res);
      const isPasswordValid = await brcypt.compare(password, user.password);

      sendError(isPasswordValid, res);

      delete user.password;
      return res.json({ status: true, user });
    } catch (error) {
      next(error);
    }
  },
  setAvatar: async (req,res,next)=>{ 
      
    
         
          const userId =req.params.id
          
          const avatarImage = req.body.image;
        await Users.findByIdAndUpdate(userId,{
              isAvatarImage:true,
              avatarImage
          },{ new:true}).then((data)=>{
              
            console.log(data); 
            return res.json({
            isSet: data.isAvatarImage,
            image: data.avatarImage,
        })
          }).catch((err)=>{
            console.log(err);
          })
         
     
  },
  getAllUsers:(req,res,next)=>{
      try {
          const users =await Users.find({_id:{$ne:req.params.id}}).select([
              
            "email",
              "username",
              "avataImage",
              "_id"
            ]
              
          ) 
      } catch (error) {
          
      }
  }
};
