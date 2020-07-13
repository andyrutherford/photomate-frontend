import React from 'react';
import styled from 'styled-components';

import FeedItemHeader from './FeedItemHeader';
import FeedItemImage from './FeedItemImage';
import FeedItemActions from './FeedItemActions';
import FeedItemInfo from './FeedItemInfo';
import FeedItemAddComment from './FeedItemAddComment';

const FeedItemWrapper = styled.article`
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 3px;

  margin: auto;
  margin-bottom: 60px;
  width: 615px;

  @media screen and (max-width: 620px) {
    border: none;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    border-radius: 0px;
    width: 100vw;
  }
`;

const FeedItem = () => {
  return (
    <FeedItemWrapper>
      {/* FeedItemHeader */}
      <FeedItemHeader />
      {/* FeedItemImage */}
      <FeedItemImage />
      {/* FeedItemActions */}
      <FeedItemActions />
      {/* FeedItemInfo */}
      <FeedItemInfo />
      {/* FeedItemAddComment */}
      <FeedItemAddComment />
    </FeedItemWrapper>
  );
};

export default FeedItem;
