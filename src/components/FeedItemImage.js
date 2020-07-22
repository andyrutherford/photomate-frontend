import React from 'react';
import styled from 'styled-components';

const FeedItemImageWrapper = styled.div`
  height: 350px;
  width: 100%;
  border: none;

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const FeedItemImage = ({ image, caption }) => {
  return (
    <FeedItemImageWrapper>
      <img src={image} alt={caption} />
    </FeedItemImageWrapper>
  );
};

export default FeedItemImage;
