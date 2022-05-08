import React ,{useState,useEffect}from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components'
import Logo from '../assets/logo.svg'
import {ToastContainer,toast} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios"
import { registerRoute } from '../utils/ApiRoutes';
function Register() {
    const navigate= useNavigate()
    const [values,setValues]=useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:'',
    });
    const headers = {
        "Content-Type": "application/json",
        
      };
    const toastOption={
        position:"top-right",
        autoClose:8000,
        pauseOnHover:true,
        draggable:true,
        theme:"dark"
     }
 //to save the login state of the user
 useEffect(()=>{
    if(localStorage.getItem("chat-app-user")){
        navigate("/")
    }
},[])
    const handleSubmit=async (event)=>{
        event.preventDefault();
       if(handleValidation()){
        

        const {password,username,email}=values;
        const {data}=await axios.post(registerRoute,{
            username,email,password
        })
       if(data.status===false){
           toast.error(data.msg,toastOption)
       }
       if(data.status===true){
           localStorage.setItem("chat-app-user",JSON.stringify(data.user))
           navigate("/")
       }
       
       } ;
    }

    const handleChange=(event)=>{
        setValues({...values,[event.target.name]:event.target.value})
    }

    const handleValidation = ()=>{
        const {password,confirmPassword,username,email}=values;
        if(password!==confirmPassword){
          
         toast.error(' passowrd and confirm password should be same.',toastOption);
         return false;
        }else if (username.length<3){
            toast.error(' username must be greater than 3',toastOption);
            return false;

        }else if (password.length<8){
            toast.error(' password must at least than 8',toastOption);
            return false;

        }else if (email===""){
            toast.error(' email is required',toastOption);
            return false;

        }
        return true
        ;
    }

  return (
   <>

    <FormContainer>
        <form onSubmit={(event)=>handleSubmit(event)}>
        <div className='brand'>
    <img src={Logo} alt='logo'/>
    <h1>snappy</h1>
        </div>
        <input type="text" placeholder="Username" name="username"  onChange={(event)=> handleChange(event)}  />
        <input type="email" placeholder="email" name="email"  onChange={(event)=> handleChange(event)}  />
        <input type="password" placeholder="password" name="password"  onChange={(event)=> handleChange(event)}  />
        <input type="password" placeholder="confirmpassword" name="confirmPassword"  onChange={(event)=> handleChange(event)}  />
        <button type='submit' >Create user</button>
        <span> Already have account? 
        <Link to='/login'>   Login</Link>
        </span>
        </form>
    </FormContainer>
    <ToastContainer>

    </ToastContainer>

   </>
  )
}
const FormContainer = styled.div`

height:100vh;
width:100vw;
display:flex;
flex-direction:column;
justify-content:center;
gap:1rem;
align-items:center;
background-color:#131324;
.brand{
    display:flex;
    align-items:center;
    gap:1rem;
    justify-content:center;
img{
    height:5rem;
}

h1{
    color:white;
    text-transform:upppercase;

}
}
form{
    display:flex;
    flex-direction:column;
    gap:2rem;
    background-color:#00000076;
    padding:3rem 5rem;
    border-radius:2rem;
    input{
        border-radius:0.4rem;
        background-color: transparent;
        padding:1rem;
        color:white;
        width:100%;
        font-size:1rem;
        border:0.1rem solid #4e0eff;
        &:focus{
            border:0.1rem solid green;
            outline:none;

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
    span{
        color:white;
        text-transform:uppercase;
        a{
            color:#4e0eff;
        text-decoration:none;
        font-weight:bold;

        
        }
    }
}

`;
export default Register