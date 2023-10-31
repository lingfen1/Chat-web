import React from 'react'
import Search from '../img/search.png'
import Edit from '../img/edit.png'
const search = () => {
  return (
    <div className="search">
      <span>Messages</span>
      <div className="searchIcons">
        <img src={Search} alt="" />
        <img src={Edit} alt="" />
      </div>
    </div>
  )
}

export default search
