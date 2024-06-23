import React from 'react';
import { Link } from 'react-router-dom';
import './Message.css';
import MessageData from '../../FakeApis/MessageData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faSearch } from '@fortawesome/free-solid-svg-icons';

const Message = () => {
  return (
    <div className="message-container">
      <div className="message-top">
        <h4>Messages</h4>
        <FontAwesomeIcon icon={faEdit} />
      </div>
      <div className="message-search">
        <FontAwesomeIcon icon={faSearch} />
        <input type="search" placeholder="Search Messages" />
      </div>
      <div className="message-list">
        {MessageData.map(mess => (
          <Link to='/chatbox/id' key={mess.id} className="message-item">
            <div className="user">
              <img src={mess.img} alt={`${mess.name}'s profile`} />
              <div className="green-active"></div>
            </div>
            <div className="message-body">
              <h5>{mess.name}</h5>
              <p>{mess.mText}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Message;
