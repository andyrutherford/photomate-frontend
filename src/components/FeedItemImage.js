import React from 'react';
import styled from 'styled-components';

const FeedItemImageWrapper = styled.div`
  height: 350px;
  width: 100%;
  background-color: lightgrey;
`;

const FeedItemImage = () => {
  return (
    <FeedItemImageWrapper>
      <img src='!#' />
    </FeedItemImageWrapper>
  );
};

export default FeedItemImage;
