import React, { useState } from 'react';
import './Feed.css';
import FeedsData from '../../FakeApis/HomeFeedData';
import CommentsData from '../../FakeApis/CommetData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faComment, faSave, faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import CurrentUser from '../../FakeApis/CurrentUserData';

const Feed = () => {
  const [showOptions, setShowOptions] = useState(null);
  const [showComments, setShowComments] = useState(null); // state to track which feed's comments to show
  const [newComment, setNewComment] = useState(''); // state to track new comment input

  const toggleOptions = (feedId) => {
    setShowOptions(showOptions === feedId ? null : feedId);
  };

  const toggleComments = (feedId) => {
    setShowComments(showComments === feedId ? null : feedId);
  };

  const handleNewCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleNewCommentSubmit = (e, feedId) => {
    e.preventDefault();
    if (newComment.trim()) {
      // Logic to handle new comment submission can be added here
      console.log(`New comment for feed ${feedId}: ${newComment}`);
      setNewComment('');
    }
  };

  return (
    <div className='feeds'>
      {FeedsData.map(feed => (
        <div key={feed.id} className='feed-card'>
          <div className='feed-header'>
            <div className='profile-info'>
              <img src={feed.feedProfile} alt={feed.name} className='profile-img' />
              <h3 className='user-name'>{feed.name}</h3>
            </div>
            <div className='options-icon' onClick={() => toggleOptions(feed.id)}>
              <FontAwesomeIcon icon={faEllipsisH} className='action-icon' />
              {showOptions === feed.id && (
                <div className='options-menu'>
                  <div>Share</div>
                  <div>Repost</div>
                </div>
              )}
            </div>
          </div>
          <img src={feed.feedImage} alt='Feed Image' className='feed-img' />
          <div className='feed-actions'>
            <div className='left-icons'>
              <FontAwesomeIcon icon={faHeart} className='action-icon' />
              <FontAwesomeIcon icon={faComment} className='action-icon' onClick={() => toggleComments(feed.id)} />
            </div>
            <div className='right-icons'>
              <FontAwesomeIcon icon={faSave} className='action-icon' />
            </div>
          </div>
          <p>{feed.desc}</p>
          {showComments === feed.id && (
            <div className='comment-popup'>
              <div className='comment-popup-content'>
                {CommentsData.map(comment => (
                  <div key={comment.id} className='comment'>
                    <img src={comment.commentProfile} alt={comment.name} className='comment-profile-img' />
                    <div>
                      <p className='comment-name'>{comment.name}</p>
                      <p>{comment.CommeText}</p>
                    </div>
                  </div>
                ))}
                <form onSubmit={(e) => handleNewCommentSubmit(e, feed.id)} className='new-comment-form'>
                  <img src={CurrentUser.map(user=>(user.ProfileImage))} alt='Current User' className='comment-profile-img' />
                  <input
                    type='text'
                    value={newComment}
                    onChange={handleNewCommentChange}
                    placeholder='Write a comment...'
                    className='new-comment-input'
                  />
                  <button type='submit' className='submit-comment-btn'>Post</button>
                </form>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Feed;
