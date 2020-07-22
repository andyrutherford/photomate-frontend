import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { likePost } from '../actions/post-actions';

import {
  HeartIcon,
  FilledHeartIcon,
  InboxIcon as ShareIcon,
  MessageIcon,
  BookmarkIcon as SaveIcon,
} from './Icons';

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

const FeedItemActions = ({ isLiked, postId, likePost }) => {
  const likePostHandler = () => {
    likePost(postId);
  };

  return (
    <FeedItemActionsWrapper>
      <div className='actions-left'>
        {isLiked ? (
          <FilledHeartIcon onClick={likePostHandler} />
        ) : (
          <HeartIcon onClick={likePostHandler} />
        )}
        <MessageIcon />
        <ShareIcon />
      </div>
      <div className='actions-right'>
        <SaveIcon />
      </div>
    </FeedItemActionsWrapper>
  );
};

export default connect(null, { likePost })(FeedItemActions);
