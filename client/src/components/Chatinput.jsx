import React from 'react'
import styled from 'styled-components'
import Picker from "emojy-picker-react"
import { IoMdSend} from "react-icons/io"
import {BsEmojiSmileFill} from "react-icons/bs"
function Chatinput() {
  return (
      <>
      <Container>
          <div className='button-contaier'>
              <div className='emojy'>
                  <BsEmojiSmileFill/>
              </div>
          </div>
          <form>
              <input type='text ' placeholder="type your message here"/>
              <button className='submit'> 
               <IoMdSend/>
              </button>
              </form>
      </Container>
      
      </>
  )
}

const Container = styled.div`
    
`
export default Chatinput