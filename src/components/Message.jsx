import React from 'react'
import Texas from '../img/Texas.png'
const Message = ({ onClick }) => {
  return (
    <div className="message" onClick={onClick}>
      <img src={Texas} alt="" />
      <div className="messageInfo">
        <span>Nolaaa</span>
        <p>typing...</p>
      </div>
    </div>
  )
}

export default Message
