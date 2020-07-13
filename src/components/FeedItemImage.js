import React from 'react';
import styled from 'styled-components';

import photo from '../assets/photo.jpg';

const FeedItemImageWrapper = styled.div`
  height: 350px;
  width: 100%;
  background-color: lightgrey;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const FeedItemImage = () => {
  return (
    <FeedItemImageWrapper>
      <img src={photo} />
    </FeedItemImageWrapper>
  );
};

export default FeedItemImage;
