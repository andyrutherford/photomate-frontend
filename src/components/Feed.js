import React from 'react';
import styled from 'styled-components';

import FeedItem from './FeedItem';

const FeedWrapper = styled.section`
  color: red;
  margin-right: 28px;

  @media screen and (max-width: 1040px) {
    display: flex;
    margin: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Feed = () => {
  return (
    <FeedWrapper>
      <FeedItem />
      <FeedItem />
      <FeedItem />
      <FeedItem />
      <FeedItem />
    </FeedWrapper>
  );
};

export default Feed;
