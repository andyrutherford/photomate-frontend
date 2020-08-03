import React, { useState, useEffect, useCallback } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { GridIcon, BookmarkIcon } from './Icons';
import Button from '../styles/Button';

import PhotoGridItem from './PhotoGridItem';

import { getSavedPosts, getPostsByUsername } from '../actions/post-actions';

const PhotoGridWrapper = styled.div`
  hr {
    border: 0.5px solid #d3d3d3;
    margin-top: 10px;
  }

  h1 {
    text-align: center;
    margin-top: 80px;
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

  const getSavedPostsHandler = useCallback(() => {
    if (savedPosts) return;
    setUserPosts();
    getSavedPosts().then((res) => setSavedPosts(res));
  }, [setUserPosts, getSavedPosts, savedPosts]);

  const getUserPostsHandler = useCallback(() => {
    if (!profileOwner || userPosts) return;
    setSavedPosts();
    getPostsByUsername(user).then((res) => setUserPosts(res));
  }, [getPostsByUsername, setUserPosts, user, userPosts, profileOwner]);

  useEffect(() => {
    getPostsByUsername(user).then((res) => setUserPosts(res));
  }, [getPostsByUsername, user]);
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

      {savedPosts &&
        (savedPosts.length === 0 ? (
          <h1>You have no saved posts.</h1>
        ) : (
          savedPosts.map((post, index) => (
            <div className='photo-grid'>
              <PhotoGridItem key={post._id} post={savedPosts[index]} />
            </div>
          ))
        ))}
      {userPosts &&
        (userPosts.length === 0 ? (
          profileOwner ? (
            <h1>You don't have any posts.</h1>
          ) : (
            <h1>This user has no posts.</h1>
          )
        ) : (
          <div className='photo-grid'>
            {userPosts.map((post, index) => (
              <PhotoGridItem key={post._id} post={userPosts[index]} />
            ))}
          </div>
        ))}
    </PhotoGridWrapper>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.currentUser.username,
});

export default connect(mapStateToProps, { getSavedPosts, getPostsByUsername })(
  PhotoGrid
);
