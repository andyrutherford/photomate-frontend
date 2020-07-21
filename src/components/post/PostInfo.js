import React from 'react';
import styled from 'styled-components';

import Avatar from '../../styles/Avatar';

const PostInfoWrapper = styled.div`
  display: flex;
  height: 300px;
  overflow-y: scroll;
  scrollbar-width: none;
  padding: 16px;

  .post-info__caption {
    display: flex;
  }
`;

const PostInfo = ({ avatar, username, caption }) => {
  return (
    <PostInfoWrapper>
      <div className='post-info__caption'>
        <Avatar src={avatar} />{' '}
        <p>
          <span className='bold'>{username}</span> {caption}
        </p>
      </div>
    </PostInfoWrapper>
  );
};

export default PostInfo;
