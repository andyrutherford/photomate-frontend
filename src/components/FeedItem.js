import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import FeedItemHeader from './FeedItemHeader';
import FeedItemImage from './FeedItemImage';
import FeedItemActions from './FeedItemActions';
import FeedItemInfo from './FeedItemInfo';
import FeedItemAddComment from './FeedItemAddComment';

const FeedItemWrapper = styled.article`
  background-color: white;
  border: 1px solid lightgrey;
  border-radius: 3px;

  margin: auto;
  margin-bottom: 60px;
  width: 615px;

  @media screen and (max-width: 620px) {
    border: none;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    border-radius: 0px;
    width: 100vw;
  }
`;

const FeedItem = ({ feedItem, authUser }) => {
  return (
    <FeedItemWrapper>
      <FeedItemHeader
        username={feedItem.user.username}
        avatar={feedItem.user.avatar}
        postOwner={authUser.username === feedItem.user.username}
        postId={feedItem._id}
      />
      <FeedItemImage image={feedItem.image} caption={feedItem.caption} />
      <FeedItemActions
        postId={feedItem._id}
        isLiked={feedItem.likes.includes(authUser.id)}
      />
      <FeedItemInfo
        username={feedItem.user.username}
        caption={feedItem.caption}
        likeCount={feedItem.likeCount}
        comments={feedItem.comments}
        createdAt={feedItem.createdAt}
      />
      <FeedItemAddComment />
    </FeedItemWrapper>
  );
};

const mapStateToProps = (state) => ({
  authUser: state.auth.user,
});

export default connect(mapStateToProps)(FeedItem);
