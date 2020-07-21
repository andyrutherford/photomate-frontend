import React from 'react';
import styled from 'styled-components';

import {
  ActivityIcon as LikeIcon,
  InboxIcon as ShareIcon,
  MessageIcon,
  BookmarkIcon as SaveIcon,
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

const PostActions = () => {
  return (
    <PostActionsWrapper>
      <div className='post-actions__buttons'>
        <div className='post-actions__left'>
          <LikeIcon />
          <MessageIcon />
          <ShareIcon />
        </div>
        <div className='post-actions__right'>
          <SaveIcon />
        </div>
      </div>
      <div className='post-actions__summary'>
        <span>8 people have liked this post</span>
      </div>
      <div className='date'>
        <span>{'2 days ago'.toUpperCase()}</span>
      </div>
    </PostActionsWrapper>
  );
};

export default PostActions;
