import React from 'react'
import Camera from '../img/Cameraicon.png'
import Addperson from '../img/Addperson.jpg'
import Moreicon from '../img/Moreicon.jpg'
import Messages from './Messages'
import Input from './Input'


const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Prince</span>
        <div className="chatIcon">
          <img src={Camera} alt="" />
          <img src={Addperson} alt="" />
          <img src={Moreicon} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  )
}

export default Chat