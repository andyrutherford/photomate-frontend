import React from 'react';
import styled from 'styled-components';

const PostAddCommentWrapper = styled.div`
  margin-top: auto;
  * {
    border: none;
    font-size: 14px;
    height: 56px;
    padding: 0 16px;
    width: 100%;
  }

  input[type='text'] {
    padding-right: 50px;
  }

  input[type='submit'] {
    background: none;
    border: none;
    color: #0095f6;
    cursor: pointer;
    font-weight: bold;
    margin-left: -75px;
    width: 75px;
  }
`;

const PostAddComment = () => {
  return (
    <PostAddCommentWrapper>
      <input type='text' alt='' placeholder='Add a commment...' />
      <input type='submit' value='Post' />
    </PostAddCommentWrapper>
  );
};

export default PostAddComment;
