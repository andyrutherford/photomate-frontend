import React from 'react';
import { connect } from 'react-redux';

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

const Feed = ({ feed }) => {
  return (
    <FeedWrapper>
      {feed.map((item, index) => (
        <FeedItem key={item._id} feedItem={feed[index]} />
      ))}
    </FeedWrapper>
  );
};

const mapStateToProps = (state) => ({
  feed: state.post.feed,
});

export default connect(mapStateToProps)(Feed);
