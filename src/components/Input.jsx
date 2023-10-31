import React from 'react'
import { useState } from 'react'
import { createContext, useContext } from 'react'
import { Context } from '../Data/MessagesDatabase'
import { largeContext } from '../Data/TilesDatabase'

const Input = () => {
  const [comment, setComment] = useState('')
  const { setMessages, messages } = useContext(Context)
  const { tile, setTile } = useContext(largeContext)
  const recordChange = (e) => {
    setComment(e.target.value)
    console.log('tile = ', tile)
  }
  const submitChange = (e) => {
    const newMessage = {
      id: messages.length + 1,
      img: messages[0].img,
      owner: false,
      username: 'Patrick',
      message: comment,
      datetime: '2022-06-01',
    }
    setMessages([...messages, newMessage])
  }
  return (
    <div className="input">
      <input
        type="text"
        placeholder="type something..."
        onChange={recordChange}
      />
      <div className="send">
        <label htmlFor="file">
          <button onClick={submitChange}>Send</button>
        </label>
      </div>
    </div>
  )
}

export default Input
