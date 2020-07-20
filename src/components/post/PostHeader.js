import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

import Avatar from '../../styles/Avatar';

const PostHeaderWrapper = styled.div`
  border-bottom: 0.5px solid lightgrey;
`;

const PostHeader = ({ username, avatar }) => {
  return (
    <PostHeaderWrapper>
      <Avatar src={avatar} alt='avatar' />
      <h3>{username}</h3>
    </PostHeaderWrapper>
  );
};

export default PostHeader;
