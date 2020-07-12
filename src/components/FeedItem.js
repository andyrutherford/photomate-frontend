import React from 'react';
import styled from 'styled-components';

const FeedItemWrapper = styled.article`
  border: 1px solid lightgrey;
  border-radius: 3px;
  height: 614px;
  margin: auto;
  margin-bottom: 60px;
  width: 615px;
`;

const FeedItem = () => {
  return <FeedItemWrapper></FeedItemWrapper>;
};

export default FeedItem;
