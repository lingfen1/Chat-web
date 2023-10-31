import React from 'react'
import Userbar from './Userbar'
import Messages from './Messages'
import Input from './Input'
import MessagesDatabase from '../Data/MessagesDatabase'

const Chat = () => {
  return (
    <div className="chat">
      <Userbar />
      <MessagesDatabase />
    </div>
  )
}

export default Chat
