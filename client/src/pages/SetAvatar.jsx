import React ,{useState,useEffect}from 'react'
import {  useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import loader from '../assets/loader.gif'
import {ToastContainer,toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import { setAvatarRoute } from '../utils/ApiRoutes';
import {Buffer} from 'buffer'
function SetAvatar() {


  const api='http://api.multiavatar.com/45678945'
  const navigate=useNavigate()
  const [avatars,setAvatars]=useState([]);
  const [isLoading,setIsloading]=useState(true);
  const [selectedAvatar,setSelectedAvatar]=useState(undefined);
  const toastOption={
    position:"top-right",
    autoClose:8000,
    pauseOnHover:true,
    draggable:true,
    theme:"dark"
 }

 useEffect(()=>{
    if(!localStorage.getItem("chat-app-user")){
      navigate("/login")
    }
 })

 const setProfilePicture=async ()=>{
  if(selectedAvatar===undefined){
    toast.error(" Please select an avatar ",toastOption)
  }else{
   
    const user=await JSON.parse(localStorage.getItem("chat-app-user"));
   const {data}= await axios.post(`${setAvatarRoute}/${user._id}`,{
      image:avatars[selectedAvatar],
    })

    if(data.isSet){
      console.log(data);
      user.isAvatarImage=true;

      user.avatarImage=data.image;
console.log("==========================");
      localStorage.setItem("chat-app-user",JSON.stringify(user));
      navigate("/")
console.log("==========================");

    }else{
      toast.error("Error setting avatar",toastOption)
    }
  }
 }
 useEffect(()=>{
   async function avatarFun(){
   const data=[];
   for(let i=0;i<4;i++){
     const image = await axios.get(`${api}/${Math.round(Math.random()*1000)}`)
     const buffer=new Buffer(image.data);
     data.push(buffer.toString("base64"))
   }
   setAvatars(data);
   setIsloading(false)
  }

   avatarFun()
 },[])

  return (
    <>
    {
      isLoading? <Container>
        <img src={loader} alt='loader' className='loader'/>
      </Container> :(
    <Container>
    <div className="title container">
      <h1>
        pick avatar as your profile picture
      </h1>
    </div>
    <div className="avatars">
      {
        avatars.map((avatar,index)=>{

          return(
            <div key={index}className={`avatar ${selectedAvatar===index? "selected":''}`}>
              <img src={`data:image/svg+xml;base64,${avatar}
              `} alt='avatar'
              onClick={()=>setSelectedAvatar(index)}
              />
              </div>
          )
        })

      }
    </div>
    <button className='submit-btn' onClick={setProfilePicture}>Set as Profile picture</button>
    </Container>
    )
  }
    <ToastContainer/>
   
    </>
  )
}

const Container=styled.div`
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
gap:3rem;
background-color:#131324;
height:100vh;
width:100vw;
.loader{
  max-inline-size:100%;
}
.title-container{
  h1{
    color:white;

  }
}
.avatars{
  display:flex;
  gap:2rem;
  .avatar{
    border:0.4rem solid transparent;
    transition:0.5s eade-in-out;
    border-radius:5rem;
    padding:0.4rem;
    justify-content:center;
    align-items:center;
  
    img{
    height:6rem;
  }
  }

  .selected{
    border:0.4rem solid #4e0eff
  }
  
}
button{
  background-color: #997af0;
  color:white;
  padding: 1rem 2rem;
  border:none;
  font-weight:bold;
  cursor:pointer;
  border-radius:0.4rem;
  font-size:1rem;
  text-transform:uppercase;
  transition:0.5s ease-in-out;
  &:hover{
  background-color: #4e0eff;
      
  }

}
`;

export default SetAvatar