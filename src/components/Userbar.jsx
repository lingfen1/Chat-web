import React from 'react'
import video from '../img/video.png'
import call from '../img/Call.png'
import message from '../img/message.png'
import Texas from '../img/Texas.png'
const Userbar = () => {
  return (
    <div className="userbar">
      <div className="userInfo">
        <img src={Texas} alt="" />
        <div className="userText">
          <span>Odama Studio</span>
          <p>typing...</p>
        </div>
      </div>

      <div className="userAbility">
        <img src={video} alt="" />
        <img src={call} alt="" />
        <img src={message} alt="" />
      </div>
    </div>
  )
}

export default Userbar
