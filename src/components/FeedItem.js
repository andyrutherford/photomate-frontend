import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import FeedItemHeader from './FeedItemHeader';
import FeedItemImage from './FeedItemImage';
import FeedItemActions from './FeedItemActions';
import FeedItemInfo from './FeedItemInfo';
import FeedItemAddComment from './FeedItemAddComment';

const FeedItemWrapper = styled.article`
  background-color: #fff;
  border: 1px solid #d3d3d3;
  border-radius: 3px;
  margin: auto;
  margin-bottom: 60px;
  width: 615px;

  @media screen and (max-width: 620px) {
    width: 100vw;
    margin-bottom: 30px;
  }
`;

const FeedItem = ({ feedItem, authUser, savedPosts }) => {
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
        isSaved={savedPosts.includes(feedItem._id)}
      />
      <FeedItemInfo
        username={feedItem.user.username}
        caption={feedItem.caption}
        likeCount={feedItem.likeCount}
        comments={feedItem.comments}
        createdAt={feedItem.createdAt}
        postId={feedItem._id}
      />
      <FeedItemAddComment postId={feedItem._id} />
    </FeedItemWrapper>
  );
};

const mapStateToProps = (state) => ({
  authUser: state.auth.user,
  savedPosts: state.post.savedPosts,
});

export default connect(mapStateToProps)(FeedItem);
