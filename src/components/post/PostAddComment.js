import React, { useState } from 'react';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

import { SmileyIcon } from '../Icons';
import AddComment from '../../styles/AddComment';

const PostAddComment = ({ postId, addComment }) => {
  const [text, setText] = useState('');
  const [emojiPickerState, setEmojiPickerState] = useState(false);
  let emojiPicker;

  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    setEmojiPickerState(false);
    addComment(postId, text, 'post');
    setText('');
  };

  if (emojiPickerState) {
    emojiPicker = (
      <Picker
        title='Pick your emoji…'
        emoji='point_up'
        onSelect={(emoji) => setText(text + emoji.native)}
        style={{
          width: '319px',
          position: 'absolute',
          bottom: '60px',
          right: '0px',
        }}
      />
    );
  }

  const emojiHandler = (e) => {
    e.preventDefault();
    setEmojiPickerState(!emojiPickerState);
  };

  return (
    <AddComment>
      <form>
        <input
          type='text'
          alt=''
          placeholder='Add a commment...'
          value={text}
          onChange={onChange}
        />
        <div
          className='input-actions'
          style={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <button onClick={emojiHandler}>
            <SmileyIcon size={24} />{' '}
          </button>
          <input type='submit' value='Post' onClick={onSubmit} />
        </div>

        {emojiPicker}
      </form>
    </AddComment>
  );
};

export default PostAddComment;
