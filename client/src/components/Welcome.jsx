import React from 'react'
import styled from 'styled-components'
import Robot from '../assets/robot.gif'
function Welcome(currentUser) {
const username=currentUser.currentUser.username;
  return (
    <>
    <Container>
        <img  src={Robot} alt='robot'  />
        <h1>
            Welcome , <span> {username}</span>
        </h1>
        <h3>Please select a chat</h3>
    </Container>
    
    
    </>
  )
}

const Container = styled.div`
    display: flex;
    justify-content:center
     ;
     align-items: center;
     flex-direction: column;
     color: white;
     img{
         height:20rem;
     }
     span{
         color: #ec8910;
     }


`
export default Welcome