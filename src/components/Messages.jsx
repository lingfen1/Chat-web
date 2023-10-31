import React from 'react'
import { createContext, useContext } from 'react'
import Talking from './Talking'
import { Context } from '../Data/MessagesDatabase'

const Messages = () => {
  const { setMessages, messages } = useContext(Context)

  return (
    <div className="messages">
      {messages.map((item) => (
        <Talking
          key={item.id}
          img={item.img}
          message={item.message}
          name={item.name}
        />
      ))}
    </div>
  )
}

export default Messages
