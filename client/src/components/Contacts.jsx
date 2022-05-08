import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import logo from "../assets/logo.svg"
function Contacts({ contacts, currentUser }) {
    const [currentUserName, setCurrentUserName] = useState(undefined);
    const [currentUserImage, setCurrentUserImage] = useState(undefined);
    const [currentUserSelected, setCurrentUserSelected] = useState(undefined);

    useEffect(() => {
        if (currentUser) {
            setCurrentUserImage(currentUser.avatarImage);
            setCurrentUserName(currentUser.username);

        }
    }, [currentUser])
    const changeCurrentChat = (index, contact) => {

    }
    return (
        <>{currentUserImage && currentUserName && (
            <Container>
                <div className='brand'>
                    <img src={logo} alt="logo" />
                    <h3>snappy</h3>
                </div>
                <div className='contacts'>
                    {
                        contacts.map((contact, index) => {
                            return (
                                <>
                                    <div className={`contact ${index === currentSelected ? "selected" : ""}`} key={index}>
                                        <img src={`data:image/svg+xml;base64,${contact}
              `} alt='avatar'
                                            onClick={() => setSelectedAvatar(index)}
                                        />

                                    </div>
                                    <div className="username">
                                        <h3>{contact.username}</h3>
                                    </div>
                                </>
                            )
                        })
                    }

                </div>
                <div className="curren-use">
                    <div className="avatar">
                        <img src={`data:image/svg+xml;base64,${currentUserImage}
                       `} alt='avatar'
                            onClick={(index) => setSelectedAvatar(index)}
                        />
                    </div>
                    <div className="username">
                        <h2>{currentUserName}</h2>
                    </div>
                </div>
            </Container>
        )}


        </>
  
  )
}

const Container = styled.div`
display:grid;
grid-template-rows:10% 75% 15%;
overflow: hidden;
background-color: #080420;
.brand{
    display: flex;
    align-items: center;
    justify-content: center;
    gap:1rem;
    img{
        height:2rem;
    }
    h3{
        color:white;
        text-transform: uppercase;
    }

}
.contacts{
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    gap:0.8rem;
    .contact{
        background-color: #ffffff39;
        min-height: 5rem;
        width: 90%;
        border-radius: 0.2rem;
        padding: 0.4rem;
        cursor: pointer;
        gap:1rem;
        align-items: center;
        display: flex;
        transition: 0.5s ease-in-out;
        .avatar{
            img{
                height: 3rem,;

            }
        }
        .username{
            h3{
                color: white;
            }
        }
        .selected{
            background-color: #312095;
        }
    }
    .current-user{
        background-color: #0e0638;
        display: flex;
        justify-content: center;
        align-items: center;
        gap:2rem;
        .avatar{
            img{
                height: 4rem;
                max-inline-size: 100%;
            }
        }
        .username{

        }
    }

}
`
export default Contacts