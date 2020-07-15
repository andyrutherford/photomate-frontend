import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components';

import FeedItem from './FeedItem';

const FeedWrapper = styled.section`
  margin-right: 28px;

  @media screen and (max-width: 984px) {
    display: flex;
    margin: auto;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

const Feed = () => {
  return (
    <FeedWrapper>
      <Link to='/login'>Login</Link> <Link to='/signup'>Signup</Link>{' '}
      <Link to='/profile'>Profile</Link>{' '}
      <Link to='/accounts/edit'>Settings</Link>
      <FeedItem />
      <FeedItem />
      <FeedItem />
      <FeedItem />
      <FeedItem />
    </FeedWrapper>
  );
};

export default Feed;
