import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FeedItemInfoWrapper = styled.div`
  padding: 0 16px;

  .description > :first-child {
    font-weight: bold;
  }
  .comment > :first-child {
    font-weight: bold;
  }
`;

const FeedItemInfo = ({
  likeCount,
  comments,
  createdAt,
  username,
  caption,
  postId,
}) => {
  const formatLikes = () => {
    if (likeCount === 0) {
      return 'Be the first to like this';
    } else if (likeCount === 1) return '1 like';
    else return likeCount + ' likes';
  };

  const commentList = () => {
    if (comments.length <= 2) {
      return comments.map((comment, index) => (
        <div className='comment' key={index}>
          <Link className='black' to={`/${comment.user.username}`}>
            {comment.user.username}{' '}
          </Link>
          <span>{comment.text}</span>
        </div>
      ));
    } else {
      return (
        <div>
          <Link
            className='subtext'
            to={`/p/${postId}`}
            style={{ margin: '5px 0' }}
          >
            View all {comments.length} comments
          </Link>
          <div className='comment'>
            <Link
              className='black'
              to={`/${comments[comments.length - 2].user.username}`}
            >
              {comments[comments.length - 2].user.username}{' '}
            </Link>
            <span>{comments[comments.length - 2].text}</span>
          </div>
          <div className='comment'>
            <Link
              className='black'
              to={`/${comments[comments.length - 1].user.username}`}
            >
              {comments[comments.length - 1].user.username}{' '}
            </Link>
            <span>{comments[comments.length - 1].text}</span>
          </div>
        </div>
      );
    }
  };

  return (
    <FeedItemInfoWrapper>
      <span className='bold'>{formatLikes()}</span>
      <div className='description'>
        <Link className='black' to={`/${username}`}>
          {username}
        </Link>
        <span> {caption}</span>
      </div>
      {commentList()}
      {/* {comments.map((comment, index) => (
        <div className='comment' key={index}>
          <Link className='black' to={`/${comment.user.username}`}>
            {comment.user.username}{' '}
          </Link>
          <span>{comment.text}</span>
        </div>
      ))} */}

      <div className='subtext small'>
        <span>{createdAt}</span>
      </div>
    </FeedItemInfoWrapper>
  );
};

export default FeedItemInfo;
