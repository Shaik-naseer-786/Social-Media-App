import React from 'react';
import { Link } from 'react-router-dom';
import './LeftBar.css';
import CurrentUser from '../../FakeApis/CurrentUserData';
import Friend from '../../assets/icon/1.png';
import Groups from '../../assets/icon/2.png';
import Market from '../../assets/icon/3.png';
import Watch from '../../assets/icon/4.png';
import Gallery from '../../assets/icon/5.png';
import Videos from '../../assets/icon/6.png';
import Messages from '../../assets/icon/7.png';

const LeftBar = () => {
  return (
    <div className='leftBar'>
      <div className="left-container">
        <div className="menu">
          <Link to='/profile/id'>
            <div className="user item">
              {CurrentUser.map(user => (
                <React.Fragment key={user.id}>
                  <img src={user.ProfileImage} alt={`${user.name}'s profile`} />
                  <h4>{user.name}</h4>
                </React.Fragment>
              ))}
            </div>
          </Link>
          <Link to='/'>
            <div className='item'>
              <img src={Friend} alt="Friends" />
              <h4>Friends</h4>
            </div>
          </Link>
          <Link to='/'>
            <div className='item'>
              <img src={Groups} alt="Groups" />
              <h4>Groups</h4>
            </div>
          </Link>
          <Link to='/'>
            <div className='item'>
              <img src={Market} alt="Market" />
              <h4>Market</h4>
            </div>
          </Link>
          <Link to='/'>
            <div className='item'>
              <img src={Watch} alt="Watch" />
              <h4>Watch</h4>
            </div>
          </Link>
          <hr />
          <div className="menu">
          <h4 className="others">Your Shortcuts</h4>
        </div>
          <Link to='/'>
            <div className='item'>
              <img src={Gallery} alt="Gallery" />
              <h4>Gallery</h4>
            </div>
          </Link>
          <Link to='/'>
            <div className='item'>
              <img src={Videos} alt="Videos" />
              <h4>Videos</h4>
            </div>
          </Link>
          <Link to='/chatbox/id'>
            <div className='item'>
              <img src={Messages} alt="Messages" />
              <h4>Messages</h4>
            </div>
          </Link>
        </div>
        
      </div>
    </div>
  );
};

export default LeftBar;
