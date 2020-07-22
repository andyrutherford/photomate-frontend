import React from 'react';
import styled from 'styled-components';

import {
  HeartIcon,
  InboxIcon as ShareIcon,
  MessageIcon,
  BookmarkIcon as SaveIcon,
  FilledHeartIcon,
} from '../Icons';

const PostActionsWrapper = styled.div`
  border-top: 0.5px solid lightgrey;
  border-bottom: 0.5px solid lightgrey;
  margin-top: 4px;
  padding: 8px 16px;

  .post-actions__buttons {
    display: flex;
    justify-content: space-between;
  }

  .post-actions__left * {
    margin-right: 10px;
    margin-left: -4px;
  }
`;

const PostActions = ({ likePost, likeCount, createdAt, postId, postLiked }) => {
  const likePostHandler = () => {
    likePost(postId);
  };

  const formatLikes = () => {
    if (likeCount === 0) {
      return 'Be the first to like this';
    } else if (likeCount === 1) return '1 like';
    else return likeCount + ' likes';
  };

  return (
    <PostActionsWrapper>
      <div className='post-actions__buttons'>
        <div className='post-actions__left'>
          {postLiked ? (
            <FilledHeartIcon onClick={likePostHandler} />
          ) : (
            <HeartIcon onClick={likePostHandler} />
          )}

          <MessageIcon />
          <ShareIcon />
        </div>
        <div className='post-actions__right'>
          <SaveIcon />
        </div>
      </div>
      <div className='post-actions__summary'>
        <span>{formatLikes()}</span>
      </div>
      <div className='date'>
        <span>{createdAt}</span>
      </div>
    </PostActionsWrapper>
  );
};

export default PostActions;
