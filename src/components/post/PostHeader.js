import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

import Avatar from '../../styles/Avatar';
import { ThreeDotsIcon } from '../../components/Icons';

const PostHeaderWrapper = styled.header`
  border-bottom: 0.5px solid lightgrey;
  display: flex;
  justify-content: space-between;
  height: 72px;
  padding: 16px;

  .post-header__left {
    display: flex;
    margin: auto 0;
  }

  svg {
    margin: auto 0;
  }
`;

const PostHeader = ({ username, avatar }) => {
  return (
    <PostHeaderWrapper>
      <div className='post-header__left'>
        <Avatar src={avatar} alt='avatar' />
        <span className='bold'>{username}</span>
      </div>
      <ThreeDotsIcon />
    </PostHeaderWrapper>
  );
};

export default PostHeader;
