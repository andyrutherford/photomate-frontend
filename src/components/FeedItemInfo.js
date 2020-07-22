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
}) => {
  const formatLikes = () => {
    if (likeCount === 0) {
      return 'Be the first to like this';
    } else if (likeCount === 1) return '1 like';
    else return likeCount + ' likes';
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
      {comments.map((comment) => (
        <div className='comment'>
          <Link className='black' to={`/${comment.user.username}`}>
            {comment.user.username}{' '}
          </Link>
          <span>{comment.text}</span>
        </div>
      ))}

      <div className='subtext'>
        <span>{createdAt}</span>
      </div>
    </FeedItemInfoWrapper>
  );
};

export default FeedItemInfo;
