import React from 'react';
import styled from 'styled-components';

import {
  HeartIcon,
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

const FeedItemActions = () => {
  return (
    <FeedItemActionsWrapper>
      <div className='actions-left'>
        <HeartIcon />
        <MessageIcon />
        <ShareIcon />
      </div>
      <div className='actions-right'>
        <SaveIcon />
      </div>
    </FeedItemActionsWrapper>
  );
};

export default FeedItemActions;
