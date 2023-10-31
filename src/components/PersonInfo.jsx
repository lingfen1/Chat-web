import React from 'react'
import ling from '../img/ling.jpg'
const PersonInfo = () => {
  return (
    <div className="personInfo">
      <img src={ling} alt="" />
      <div className="userInfo">
        <span>Fazaaa</span>
        <p>log out</p>
      </div>
    </div>
  )
}

export default PersonInfo
