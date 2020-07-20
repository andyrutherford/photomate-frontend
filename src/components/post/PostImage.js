import React from 'react';

const PostImage = ({ image, caption }) => {
  return <img src={image} alt={caption} />;
};

export default PostImage;
