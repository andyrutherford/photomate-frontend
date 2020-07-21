import React from 'react';
import styled from 'styled-components';

const FeedItemInfoWrapper = styled.div`
  padding: 0 16px;

  .like-count {
    font-weight: bold;
  }

  .description > :first-child {
    font-weight: bold;
  }
  .comment > :first-child {
    font-weight: bold;
  }
`;

const FeedItemInfo = () => {
  return (
    <FeedItemInfoWrapper>
      <div className='like-count'>20 likes</div>
      <div className='description'>
        <span>cosmo </span>
        <span>Here's to feeling good all the time</span>
      </div>
      <div className='comment'>
        <span>user1 </span>
        <span>photo comment 1</span>
      </div>
      <div className='comment'>
        <span>user2 </span>
        <span>photo comment 2</span>
      </div>
      <div className='comment'>
        <span>user3 </span>
        <span>photo comment 3</span>
      </div>
      <div className='date'>
        <span>{'2 days ago'.toUpperCase()}</span>
      </div>
    </FeedItemInfoWrapper>
  );
};

export default FeedItemInfo;
