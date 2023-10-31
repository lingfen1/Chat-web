import React from 'react'
import Tool from './Tool'
import Dashboard from '../img/dashboard.png'
import Call from '../img/Call.png'
import files from '../img/files.png'
import analitycs from '../img/analitycs.png'
import peopleCommuntiy from '../img/People Community-1.png'
import messages from '../img/messages.png'
import settings from '../img/settings.png'

const Toolbar = () => {
  return (
    <div className="toolbar">
      <Tool type={Dashboard} name={'Dashboard'} />
      <Tool type={analitycs} name={'Analitycs'} />
      <Tool type={files} name={'Files'} />
      <Tool type={Call} name={'Call'} />
      <Tool type={messages} name={'Messages'} />
      <Tool type={peopleCommuntiy} name={'Community'} />
      <Tool type={settings} name={'Settings'} />
    </div>
  )
}

export default Toolbar
