import React from 'react'
import Logo from './Logo'
import Toolbar from './Toolbar'
import PersonInfo from './PersonInfo'
const Sidebar = () => {
  return (
    <div className="sidebar">
      <Logo />
      <Toolbar />
      <PersonInfo />
    </div>
  )
}

export default Sidebar
