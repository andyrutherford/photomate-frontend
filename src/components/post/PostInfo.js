import React from 'react';
import styled from 'styled-components';

import Avatar from '../../styles/Avatar';

const PostInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  overflow-y: scroll;
  scrollbar-width: none;
  padding: 16px;

  .post-info__caption {
    display: flex;
    margin-bottom: 0.5rem;
  }

  .post-info__comment {
    display: flex;
    padding: 0.5rem 0;
  }
`;

const PostInfo = ({ avatar, username, caption, comments }) => {
  return (
    <PostInfoWrapper>
      <div className='post-info__caption'>
        <Avatar src={avatar} />{' '}
        <p>
          <span className='bold'>{username}</span> {caption}
        </p>
      </div>
      <ul className='post-info__comments'>
        {comments.map((comment) => (
          <li className='post-info__comment' key={comment._id}>
            <Avatar src={comment.user.avatar} alt={comment.user.username} />
            <p>
              <span className='bold'>{comment.user.username}</span>{' '}
              {comment.text}
            </p>
          </li>
        ))}
      </ul>
    </PostInfoWrapper>
  );
};

export default PostInfo;
