import React from 'react'
import Dashboard from '../img/dashboard.png'

const Tool = (props) => {
  return (
    <div className="tool">
      <img src={props.type} alt="" />
      <span>{props.name}</span>
    </div>
  )
}

export default Tool
