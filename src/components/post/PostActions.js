import React from 'react';
import styled from 'styled-components';

import {
  HeartIcon,
  InboxIcon as ShareIcon,
  MessageIcon,
  BookmarkIcon as SaveIcon,
  FilledBookmarkIcon as SavedIcon,
  FilledHeartIcon,
} from '../Icons';
import Button from '../../styles/Button';

const PostActionsWrapper = styled.div`
  border-top: 0.5px solid lightgrey;
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

const PostActions = ({
  likePost,
  likeCount,
  createdAt,
  postId,
  isLiked,
  isSaved,
  savePost,
}) => {
  const likePostHandler = () => {
    likePost(postId);
  };

  const formatLikes = () => {
    if (likeCount === 0) {
      return 'Be the first to like this';
    } else if (likeCount === 1) return '1 like';
    else return likeCount + ' likes';
  };

  const savePostHandler = (action) => {
    savePost(postId, action);
  };

  return (
    <PostActionsWrapper>
      <div className='post-actions__buttons'>
        <div className='post-actions__left'>
          {isLiked ? (
            <FilledHeartIcon onClick={likePostHandler} />
          ) : (
            <HeartIcon onClick={likePostHandler} />
          )}

          <MessageIcon />
          <ShareIcon />
        </div>
        <div className='post-actions__right'>
          {isSaved ? (
            <Button link onClick={() => savePostHandler('unsave')}>
              <SavedIcon />
            </Button>
          ) : (
            <Button link onClick={() => savePostHandler('save')}>
              <SaveIcon />
            </Button>
          )}
        </div>
      </div>
      <div className='post-actions__summary'>
        <span>{formatLikes()}</span>
      </div>
      <div className='date'>
        <span className='subtext small'>{createdAt}</span>
      </div>
    </PostActionsWrapper>
  );
};

export default PostActions;
