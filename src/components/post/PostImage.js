import React from 'react';
import styled from 'styled-components';

const PostImageWrapper = styled.img`
  object-fit: cover;
`;

const PostImage = ({ image, caption }) => {
  return <PostImageWrapper src={image} alt={caption} />;
};

export default PostImage;
