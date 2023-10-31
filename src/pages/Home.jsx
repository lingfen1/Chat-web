import React from 'react'
import Chat from '../components/Chat'
import Sidebar from '../components/Sidebar'
import Messagebar from '../components/Messagebar'
import TilesDatabase from '../Data/TilesDatabase'

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <TilesDatabase />
      </div>
    </div>
  )
}

export default Home
