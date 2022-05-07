import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Logo from '../assets/logo.svg'
function Register() {

    const handleSubmit=(event)=>{
        event.preventDefault();
        alert("form")
    }
    const handleChange=(event)=>{

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
        <input type="password" placeholder="confirmpassword" name="confirmpassword"  onChange={(event)=> handleChange(event)}  />
        <button type='submit' >Create user</button>
        <span> Already have account? 
        <Link to='/login'>   Login</Link>
        </span>
        </form>
    </FormContainer>

   </>
  )
}
const FormContainer = styled.div`

height:100vh;
width:100vw;
display:flex;
flex-dircetion:column;
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
        border-redius:0.4rem;
        background-color: transparent;
        padding:1rem;
        color:white;
        width:100%;
        font-size:1rem;
        border:0.1rem solid #4e0eff;
        &:focus{
            border:0.1rem solid red;
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
        transition:0ms.5s ease-in-out;
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