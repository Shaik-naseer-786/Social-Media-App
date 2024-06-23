import React from "react";
import "./FriendReq.css";
import { Link } from "react-router-dom";
import FriendReqData from "../../FakeApis/FirendReqData";

const FriendReq = () => {
  return (
    <div className="friend-requests">
      <h4>Friend Requests</h4>
      {FriendReqData.map((friend) => (
        <div className="request" key={friend.id}>
          <Link to={`/profile/${friend.id}`}>
            <div className="info">
              <div className="user">
                <img src={friend.img} alt="" />
                <h5>{friend.name}</h5>
              </div>
              <div className="info-name">
                <p>{friend.info}</p>
              </div>
            </div>
          </Link>
          <div className="action">
            <button className="btn btn-primary">Accept</button>
            <button className="btn btn-red">Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FriendReq;
