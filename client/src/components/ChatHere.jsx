import React from "react";
import styled from "styled-components";
import Logout from "./Logout";
import Chatinput from "./Chatinput";
import axios from "axios"
import Messages from "./Messages";
import { sendMessageRoute } from "../utils/ApiRoutes";
function ChatHere({ currentChat ,currentUser}) {
    const handleSendMsg=async (msg)=>{
      await axios.post(sendMessageRoute,{
        from:currentUser._id,
        to:currentChat._id,
        message:msg
      })
    }
  return (
    <>
      {currentChat && (
        <Container>
          <div className="chat-header">
            <div className="user-details">
              <div className="avatar">
                <img
                  src={`data:image/svg+xml;base64,${currentChat.avatarImage}`}
                />
              </div>

              <div className="username">
                <h3>{currentChat.username}</h3>
              </div>
            </div>
          <Logout />
          </div>
        
              <Messages/>
      
          <Chatinput handleSendMsg={handleSendMsg}/>
          <div className="chat-input"></div>
        </Container>
      )}
    </>
  );
}
const Container = styled.div`
  padding-top: 1rem;
  .chat-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    .user-details {
      display: flex;
      align-items: center;
      gap: 1rem;
      .avatar {
        img {
          height: 3rem;
        }
      }
      .username {
        h3 {
          color: white;
        }
      }
    }
  }
`;
export default ChatHere;
