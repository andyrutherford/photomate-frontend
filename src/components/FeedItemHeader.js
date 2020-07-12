import React from 'react';
import styled from 'styled-components';

import { SmallCircleIcon, ThreeDotsIcon } from '../components/Icons';

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
        <SmallCircleIcon />
        <a href='!#'>user</a>
      </div>
      <ThreeDotsIcon />
    </FeedItemHeaderWrapper>
  );
};

export default FeedItemHeader;
