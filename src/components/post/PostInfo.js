import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Avatar from '../../styles/Avatar';

const PostInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 300px;
  overflow-y: scroll;
  scrollbar-width: thin;
  padding: 16px;

  a {
    margin: auto 0;
  }

  p {
    margin: auto 0;
  }

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
          <Link className='bold black' to={`/${username}`}>
            {username}
          </Link>{' '}
          {caption}
        </p>
      </div>
      <ul className='post-info__comments'>
        {comments.map((comment) => (
          <li className='post-info__comment' key={comment._id}>
            <Avatar src={comment.user.avatar} alt={comment.user.username} />
            <p>
              <Link className='bold black' to={`/${comment.user.username}`}>
                {comment.user.username}
              </Link>{' '}
              {comment.text}
            </p>
          </li>
        ))}
      </ul>
    </PostInfoWrapper>
  );
};

export default PostInfo;
