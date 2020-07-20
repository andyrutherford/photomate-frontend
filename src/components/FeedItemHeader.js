import React from 'react';
import styled from 'styled-components';

import avatar from '../assets/avatar.jpg';

import Avatar from '../styles/Avatar';
import { ThreeDotsIcon } from '../components/Icons';

const FeedItemHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  border-bottom: 1px solid lightgrey;
  padding: 8px 12px;

  * {
    margin: auto 0;
  }

  div {
    margin: inherit;
    display: flex;
  }

  a {
    display: block;
    margin-left: 10px;
    font-weight: bold;
    color: black;
  }
`;

const FeedItemHeader = () => {
  return (
    <FeedItemHeaderWrapper>
      <div>
        <Avatar md className='avatar' src={avatar} alt={avatar} />
        <a href='!#'>cosmo</a>
      </div>
      <ThreeDotsIcon />
    </FeedItemHeaderWrapper>
  );
};

export default FeedItemHeader;
