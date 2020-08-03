import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';
import { toast } from 'react-toastify';

import AddComment from '../styles/AddComment';
import { uploadImage, createPost } from '../actions/post-actions';

import { SmileyIcon, CameraIcon } from './Icons';
import Modal from '../components/modal/Modal';

const NewPostButtonWrapper = styled.div``;

export const NewPostButton = ({ uploadImage, createPost, token, userId }) => {
  const [postImage, setPostImage] = useState();
  const [previewImage, setPreviewImage] = useState();
  const [showModal, setShowModal] = useState(false);
  const [caption, setCaption] = useState('');
  const history = useHistory();
  const [emojiPickerState, setEmojiPickerState] = useState(false);
  let emojiPicker;

  const handleNewPost = async (e) => {
    if (e.target.files[0]) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setPreviewImage(e.target.result);
        setShowModal(true);
      };
      reader.readAsDataURL(e.target.files[0]);

      // Upload image action
      const image_url = await uploadImage(e.target.files[0], token);
      setPostImage(image_url);
    }
  };

  const captionHandler = (e) => {
    setCaption(e.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setEmojiPickerState(false);
    if (!caption) return toast.error('A caption is required.');
    if (!postImage)
      return toast.warn('The image is still uploading.  Please wait a moment.');
    try {
      await createPost(postImage, caption, userId);
      setShowModal(false);
      setPostImage();
      setCaption();
      return history.push('/');
    } catch (error) {
      console.log(error.message);
    }
  };

  if (emojiPickerState) {
    emojiPicker = (
      <Picker
        title='Pick your emoji…'
        emoji='point_up'
        onSelect={(emoji) => setCaption(caption + emoji.native)}
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

  const cancelNewPost = () => {
    setShowModal(false);
    setPreviewImage();
    setPostImage();
    setCaption();
  };

  return (
    <NewPostButtonWrapper>
      <label className='icon pointer' htmlFor='file-upload'>
        <CameraIcon />
      </label>
      <input
        id='file-upload'
        type='file'
        style={{ display: 'none' }}
        accept='image/*'
        onChange={handleNewPost}
      />
      {showModal && (
        <Modal
          header='New Post'
          show={true}
          className='new-post'
          onCancel={cancelNewPost}
          setCaption={captionHandler}
          onSubmit={submitHandler}
        >
          <img
            className='new-post__image'
            src={previewImage}
            alt='new post'
            style={{ margin: 'auto', width: '100%' }}
          />
          <AddComment>
            <form onSubmit={submitHandler}>
              <input
                type='text'
                alt=''
                placeholder='Add a caption...'
                onChange={captionHandler}
                value={caption}
                style={{
                  border: 'none',
                  padding: '0 1rem',
                  height: '40px',
                  width: '100%',
                  fontSize: '16px',
                  margin: 'auto 0',
                }}
              />
              <div
                className='input-actions'
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <button onClick={emojiHandler}>
                  <SmileyIcon size={24} />{' '}
                </button>
                <input
                  type='submit'
                  value='Post'
                  style={{ fontWeight: '100', fontSize: '16px' }}
                />
              </div>
              {emojiPicker}
            </form>
          </AddComment>
        </Modal>
      )}
    </NewPostButtonWrapper>
  );
};

const mapStateToProps = (state) => ({
  userId: state.auth.user.username,
  token: state.auth.token,
});

export default connect(mapStateToProps, { uploadImage, createPost })(
  NewPostButton
);
