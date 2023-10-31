import React from 'react'
import Message from './Message'
import Location from '../img/location.png'
import AllMessage from '../img/message.png'
import { useState } from 'react'
import { createContext, useContext, useEffect } from 'react'
import { largeContext } from '../Data/TilesDatabase'

const Chatsbar = () => {
  const { tile, setTile } = useContext(largeContext)
  const changeTile = (tileNum) => {
    setTile(tileNum)
  }
  return (
    <div className="chatsbar">
      <div className="pinned">
        <img src={Location} alt="" />
        <span>Pinned Message</span>
      </div>
      <Message onClick={() => changeTile(1)} />
      <div className="all">
        <img src={AllMessage} alt="" />
        <span>All Message</span>
      </div>
      <Message onClick={() => changeTile(2)} />
    </div>
  )
}

export default Chatsbar
