import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { allUsersRoute } from '../utils/ApiRoutes'
import Contacts from '../components/Contacts'
function Chat() {
    const navigate=useNavigate()
    const [contacts,setContacts]=useState([])
    const [currentUser,setCurrentUser]=useState(undefined)

    useEffect(async()=>{
        if(!localStorage.getItem("chat-app-user")){
            navigate("/login")
        }else{
            setCurrentUser(await JSON.parse(localStorage.getItem("chat-app-user")))
        }
    },[])

    useEffect(async()=>{
        if(currentUser){
            if(currentUser.isAvatarImage){
                const data =await axios.get(`${allUsersRoute}/${currentUser._id}`)
                setContacts(data.data)
            }else{
                navigate("/setAvatar")
            }
        }
    },[currentUser])
  return (
    <Container>
        <div className='container'>
            <Contacts contacts={contacts} currentUser={currentUser}/>
        </div>
    </Container>
  )
}

const Container=styled.div`

height:100vh;
width:100vw;
display:flex;
flex-direction:column;
justify-content:center;
background-color:#131324;
.container{
    height:85vh;
    width:85vw;
    background-color: #010116;
    display: grid;
    grid-template-columns:25% 75%;
    @media screen and (min-width: 720px) and (max-width:1080px) {
        grid-template-columns: 35% 65%;
    }
}


`

export default Chat