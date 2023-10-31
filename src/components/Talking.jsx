import React from 'react'
import ling from '../img/ling.jpg'

const Talking = (props) => {
  return (
    <div className="talking owner">
      <div className="talkingInfo">
        <img src={props.img} alt="" />
        <span>{props.name}</span>
      </div>
      <div className="talkingContent">
        <p>{props.message}</p>
        <img src={ling} alt="" />
      </div>
    </div>
  )
}

export default Talking
