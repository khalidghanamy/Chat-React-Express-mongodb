import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "../assets/logo.svg";
function Contacts({ contacts, currentUser,changeChat }) {
    const [currentUserName, setCurrentUserName] = useState(undefined);
    const [currentUserImage, setCurrentUserImage] = useState(undefined);
    const [currentSelected, setCurrentSelected] = useState(undefined);
    useEffect(() => {
        console.log(contacts);
        if (currentUser) {
            setCurrentUserImage(currentUser.avatarImage);
            setCurrentUserName(currentUser.username);
        }
    }, [currentUser]);
    
    const changeCurrentChat = (index, contact) => { 
      setCurrentSelected(index)
      changeChat(contact)
    };
    return (
        <>
            {currentUserImage && currentUserName && (
                <Container>
                    <div className="brand">
                        <img src={logo} alt="logo" />
                        <h3>snappy</h3>
                    </div>
                    <div className="contacts">
                        {contacts.map((contact, index) => {
                            return (
                                <>
                                    <div
                                        className={`contact ${index === currentSelected ? "selected" : ""
                                            }`}
                                        key={index}
                                        onClick={()=>changeCurrentChat(index,contact)}
                                    >
                                        <img
                                            src={`data:image/svg+xml;base64,${contact.avatarImage}`}
                                            alt="avatar"
                                        />
                                        <div className="username">
                                            <h3>{contact.username}</h3>
                                        </div>
                                    </div>
                                </>
                            );
                        })}
                         
                    </div>
                    <div className="currentUuser">
                        <div className="avatar">
                            <img
                                src={`data:image/svg+xml;base64,${currentUserImage}
                       `}
                                alt="avatar"
                            />
                        </div>
                            <div className="username">
                                <h3>{currentUserName}</h3>
                            </div>
                    </div>
                </Container>
            )}
        </>
    );
}

const Container = styled.div`
  display: grid;
  grid-template-rows: 10% 75% 15%;
  overflow: hidden;
  background-color: #080420;
  .brand {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    img {
      height: 1rem;
    }
    h3 {
      color: white;
      text-transform: uppercase;
    }
  }
  .contacts {
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap: 0.7rem;
    &::-webkit-scrollbar{
      width: 0.3rem;
      &-thumb{
        background-color: #2e2b49a4;
        width: 0.1rem;
        border-radius: 1rem;
      }
    }
    .contact {
      background-color: #ffffff39;
      min-height: 4rem;
      width: 90%;
      border-radius: 0.2rem;
      padding: 0.5rem;
      cursor: pointer;
      gap: 1rem;
      align-items: center;
      display: flex;
      transition: 0.5s ease-in-out;
      img {
        height: 4rem;
      }
     
      
    }
    .selected {
      background-color: #5339ec;
    }
}
  .currentUuser {
      background-color: #07032aa5;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 2rem;
      .avatar {
        img {
          height: 4rem;
          max-inline-size: 100%;
        }
      }
      .username {
        h3 {
          color: white;
        }
      }}
      .username {
        h3 {
          color: white;
        }
      }
      @media screen and (min-width: 720px) and (max-width:1080px){
        gap:0.5rem;
        .username{
          h3{
            font-size:1rem ;
          }
        }
      }
    
`;
export default Contacts;
