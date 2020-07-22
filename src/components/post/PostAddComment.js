import React, { useState } from 'react';

import AddComment from '../../styles/AddComment';

const PostAddComment = ({ postId, addComment }) => {
  const [text, setText] = useState('');

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    addComment(postId, text);
    setText('');
  };

  return (
    <AddComment>
      <input
        type='text'
        alt=''
        placeholder='Add a commment...'
        value={text}
        onChange={onChange}
      />
      <input type='submit' value='Post' onClick={onSubmit} />
    </AddComment>
  );
};

export default PostAddComment;
