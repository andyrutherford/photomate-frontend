import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { GridIcon, BookmarkIcon } from './Icons';
import Button from '../styles/Button';

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
    padding: 10px 20px;
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

const PhotoGrid = ({
  getSavedPosts,
  getPostsByUsername,
  user,
  profileOwner,
}) => {
  const [userPosts, setUserPosts] = useState();
  const [savedPosts, setSavedPosts] = useState();

  // const getSavedPostsHandler = () => {
  //   setUserPosts();
  //   getSavedPosts().then((res) => setSavedPosts(res));
  // };

  const getSavedPostsHandler = useCallback(() => {
    setUserPosts();
    getSavedPosts().then((res) => setSavedPosts(res));
  }, [setUserPosts, getSavedPosts]);
  // const getUserPostsHandler = () => {
  //   setSavedPosts();
  //   getPostsByUsername(user).then((res) => setUserPosts(res));
  // };

  const getUserPostsHandler = useCallback(() => {
    getSavedPosts();
    setSavedPosts();
    getPostsByUsername(user).then((res) => setUserPosts(res));
  }, [getSavedPosts, getPostsByUsername, user]);

  useEffect(() => {
    getUserPostsHandler();
  }, [getUserPostsHandler]);
  return (
    <PhotoGridWrapper>
      <hr />
      <div className='profile-tabs'>
        <div className='profile-tab'>
          <Button tab onClick={getUserPostsHandler}>
            <GridIcon size={16} />
            <span className='tab-label'> POSTS</span>
          </Button>
        </div>
        {profileOwner && (
          <div className='profile-tab'>
            <Button tab onClick={getSavedPostsHandler}>
              <BookmarkIcon size={16} />
              <span className='tab-label'>SAVED</span>
            </Button>
          </div>
        )}
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
