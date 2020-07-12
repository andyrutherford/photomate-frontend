import React from 'react';
import styled from 'styled-components';

const FeedItemWrapper = styled.article`
  border: 1px solid lightgrey;
  border-radius: 3px;
  height: 614px;
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
  return <FeedItemWrapper></FeedItemWrapper>;
};

export default FeedItem;
