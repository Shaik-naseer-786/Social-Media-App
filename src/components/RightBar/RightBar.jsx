import React from 'react'
import './RightBar.css'
import Message from '../Message/Message'
import FriendReq from '../FriendReq/FriendReq'
const RightBar = () => {
  return (
    <div className="rightbar">
      <div className="rightbar-container">
        <Message></Message>
        <FriendReq></FriendReq>
      </div>
    </div>
  )
}

export default RightBar
