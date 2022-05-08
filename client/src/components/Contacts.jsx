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
                            onClick={() => setSelectedAvatar(index)}
                        />
                    </div>
                    <div className="username">
                        <h3>{currentUserName}</h3>
                    </div>
                </div>
            </Container>
        )}
            )


        </>
  
}

const Container = styled.div``
export default Contacts