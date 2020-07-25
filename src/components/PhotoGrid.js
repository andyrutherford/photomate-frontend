import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { GridIcon, BookmarkIcon } from './Icons';

import PhotoGridItem from './PhotoGridItem';

import { getSavedPosts, getPostsByUsername } from '../actions/post-actions';

const PhotoGridWrapper = styled.div`
  hr {
    border: 0.5px solid lightgrey;
    margin-top: 10px;
  }

  a {
    color: black;
  }

  .profile-tabs {
    display: flex;
    justify-content: center;
  }

  .profile-tab {
    padding: 20px;
    margin: 0 10px;
  }
  .profile-tab * {
    vertical-align: middle;
    font-weight: bold;
  }
  .photo-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1.5rem;
    justify-items: center;
  }
`;

const PhotoGrid = ({ getSavedPosts, getPostsByUsername, user }) => {
  const [userPosts, setUserPosts] = useState();
  const [savedPosts, setSavedPosts] = useState();

  const getSavedPostsHandler = () => {
    setUserPosts();
    getSavedPosts().then((res) => setSavedPosts(res));
  };

  const getUserPostsHandler = () => {
    setSavedPosts();
    getPostsByUsername(user).then((res) => setUserPosts(res));
  };

  // useEffect(() => {
  //   getUserPostsHandler();
  // }, [getUserPostsHandler]);
  return (
    <PhotoGridWrapper>
      <hr />
      <div className='profile-tabs'>
        <div className='profile-tab'>
          <button onClick={getUserPostsHandler}>
            <GridIcon size={16} />
            <span className='tab-label'> POSTS</span>
          </button>
        </div>
        <div className='profile-tab'>
          <button onClick={getSavedPostsHandler}>
            <BookmarkIcon size={16} />
            <span className='tab-label'>SAVED</span>
          </button>
        </div>
      </div>
      <div className='photo-grid'>
        {savedPosts &&
          savedPosts.map((post, index) => (
            <PhotoGridItem key={post._id} post={savedPosts[index]} />
          ))}
        {userPosts &&
          userPosts.map((post, index) => (
            <PhotoGridItem key={post._id} post={userPosts[index]} />
          ))}
      </div>
    </PhotoGridWrapper>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.currentUser.username,
});

export default connect(mapStateToProps, { getSavedPosts, getPostsByUsername })(
  PhotoGrid
);
