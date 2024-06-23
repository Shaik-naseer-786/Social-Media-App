import React from 'react';
import './AddPost.css';
import CurrentUserData from '../../FakeApis/CurrentUserData';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faSmile, faTags, faVideo } from '@fortawesome/free-solid-svg-icons';

const AddPost = ({ darkMode }) => {
  const currentUser = CurrentUserData[0]; // Assuming the first user is the current user

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted");
  };

  return (
    <form onSubmit={handleFormSubmit} className={`postForm ${darkMode ? 'dark-mode' : ''}`}>
      <div className='user form-top'>
        <img src={currentUser.ProfileImage} alt="User Profile" />
        <input type="text" placeholder="What's on your mind?" />
        <button type="submit" className="btn btn-primary">Post</button>
      </div>
      <div className="post-categories">
        <label htmlFor="file">
            <input type="file" />
            <span><FontAwesomeIcon icon={faImage}/></span>
        </label>
        <label htmlFor="file">
            <input type="file" />
            <span><FontAwesomeIcon icon={faVideo}/></span>
        </label>
        <span><FontAwesomeIcon icon={faTags}/></span>
        <span><FontAwesomeIcon icon={faSmile}/></span>
      </div>
    </form>
  );
};

export default AddPost;
