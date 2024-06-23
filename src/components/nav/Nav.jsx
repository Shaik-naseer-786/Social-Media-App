import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';
import CurrentUser from '../../FakeApis/CurrentUserData.js';

// FontAwesome imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faSearch, faEnvelope, faBell, faBars } from '@fortawesome/free-solid-svg-icons';

import DarkMode from '../DarkMode/DarkMode.jsx';

const Nav = () => {
  return (
    <nav>
      <div className='nav-container'>
        <div className="nav-left">
          <Link to='/'>
            <h3 className='logo'>Social App</h3>
          </Link>
          <Link to='/'>
            <FontAwesomeIcon icon={faHome} />
          </Link>
          <Link to='/profile/id'>
            <FontAwesomeIcon icon={faUser} />
          </Link>
          <div className="Nav-Searchbar">
            <FontAwesomeIcon icon={faSearch} />
            <input type="search" name="" id="" />
          </div>
        </div> 
        <div className="nav-right">
          <Link to='/chatbox/id'>
            <FontAwesomeIcon icon={faEnvelope} />
          </Link>
          <Link to='/'>
            <FontAwesomeIcon icon={faBell} />
          </Link>
          <DarkMode />
          <Link to='/'>
            <FontAwesomeIcon icon={faBars} />
          </Link>
          <div className="user">
            {CurrentUser.map(user => (
              <React.Fragment key={user.id}>
                <img src={user.ProfileImage} alt={`${user.name}'s profile`} />
                <h4>{user.name}</h4>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
