import React from 'react'
import { createContext, useContext, useState } from 'react'
import Messages from '../components/Messages'
import Ling from '../img/ling.jpg'
import Texas from '../img/Texas.png'
import Input from '../components/Input'

export const Context = createContext()
const MessagesDatabase = () => {
  const [messages, setMessages] = useState([
    {
      id: 1,
      owner: true,
      img: Ling,
      username: 'Ricky',
      message: 'Hi new user',
      datetime: '2022-06-01',
    },
    {
      id: 2,
      owner: false,
      img: Texas,
      username: 'Patrick',
      message: 'Hi Ricky',
      datetime: '2022-06-01',
    },
  ])
  const [messages2, setMessages2] = useState([
    {
      id: 1,
      owner: true,
      img: Ling,
      username: 'Ricky',
      message: 'How are you today?',
      datetime: '2022-06-01',
    },
    {
      id: 2,
      owner: false,
      img: Texas,
      username: 'Patrick',
      message: 'I am fine',
      datetime: '2022-06-01',
    },
  ])
  return (
    <Context.Provider value={{ messages, setMessages }}>
      
      <div>
        <Messages />
        <Input />
      </div>
    </Context.Provider>
  )
}

export default MessagesDatabase
