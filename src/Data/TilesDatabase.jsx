import React, { useState, createContext, useContext } from 'react'
import Messagebar from '../components/Messagebar'
import Chat from '../components/Chat'
import Sidebar from '../components/Sidebar'

export const largeContext = createContext()
const TilesDatabase = () => {
  const [tile, setTile] = useState(1)
  return (
    <div className="tilesDatabase">
      <div className="container">
        <largeContext.Provider value={{ tile, setTile }}>
          <Sidebar />
          <Messagebar />
          <Chat />
        </largeContext.Provider>
      </div>
    </div>
  )
}

export default TilesDatabase
