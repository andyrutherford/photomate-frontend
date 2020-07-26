import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addComment } from '../actions/post-actions';

import AddComment from '../styles/AddComment';

const FeedItemAddComment = ({ postId, addComment }) => {
  const [text, setText] = useState('');

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    addComment(postId, text, 'feed');
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

export default connect(null, { addComment })(FeedItemAddComment);
