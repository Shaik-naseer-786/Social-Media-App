import React from "react";
import "./Stories.css";
import CurrentUser from "../../FakeApis/CurrentUserData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const UserStories = () => {
  const currentUserData = CurrentUser[0];

  return (
    <div className="story userstory">
      <div className="user">
        <img src={currentUserData.ProfileImage} alt="Profile" />
      </div>
      <img src={currentUserData.CoverPhoto} alt="Profile" />
      <label htmlFor="storyFiles">
        <FontAwesomeIcon icon={faPlus} />
        <input type="file" name="" id="storyFiles" />
      </label>
      <h5>Add Story</h5>
    </div>
  );
};

export default UserStories;
