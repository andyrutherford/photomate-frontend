import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { likePost, savePost } from '../actions/post-actions';

import {
  HeartIcon,
  FilledHeartIcon,
  InboxIcon as ShareIcon,
  MessageIcon,
  BookmarkIcon as SaveIcon,
  FilledBookmarkIcon as SavedIcon,
} from './Icons';
import Button from '../styles/Button';

const FeedItemActionsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 40px;
  margin-top: 4px;
  padding: 4px 16px;

  .actions-left * {
    margin-right: 10px;
  }
`;

const FeedItemActions = ({ isLiked, postId, likePost, savePost, isSaved }) => {
  const likePostHandler = (action) => {
    likePost(postId, action, 'feed');
  };

  const savePostHandler = (action) => {
    savePost(postId, action, 'feed');
  };

  return (
    <FeedItemActionsWrapper>
      <div className='actions-left'>
        {isLiked ? (
          <FilledHeartIcon onClick={() => likePostHandler('unlike')} />
        ) : (
          <HeartIcon onClick={() => likePostHandler('like')} />
        )}
        <MessageIcon />
        <ShareIcon />
      </div>
      <div className='actions-right'>
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
    </FeedItemActionsWrapper>
  );
};

export default connect(null, { likePost, savePost })(FeedItemActions);
