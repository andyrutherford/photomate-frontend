import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Avatar from '../styles/Avatar';
import { ThreeDotsIcon } from '../components/Icons';

const FeedItemHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  border-bottom: 0.5px solid lightgrey;
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

const FeedItemHeader = ({ username, avatar, postOwner }) => {
  return (
    <FeedItemHeaderWrapper>
      <div>
        <Avatar md className='avatar' src={avatar} alt={avatar} />
        <Link to={`/${username}`}>{username}</Link>
      </div>
      {postOwner && <ThreeDotsIcon />}
    </FeedItemHeaderWrapper>
  );
};

export default FeedItemHeader;
