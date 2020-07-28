import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { uploadImage, createPost } from '../actions/post-actions';

import { CameraIcon } from './Icons';
import Modal from '../components/modal/Modal';

const NewPostButtonWrapper = styled.div`
  input.new-post__caption {
    border: none;
    border-top: 1px solid lightgrey;
    font-size: 14px;
    height: 56px;
    padding: 0 16px;
    width: 100%;
  }
`;

export const NewPostButton = ({ uploadImage, createPost, token, userId }) => {
  const [postImage, setPostImage] = useState();
  const [previewImage, setPreviewImage] = useState();
  const [showModal, setShowModal] = useState(false);
  const [caption, setCaption] = useState('');
  const history = useHistory();

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

  const submitHandler = async () => {
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
          onCancel={() => setShowModal(false)}
          setCaption={captionHandler}
          onSubmit={submitHandler}
        >
          <img
            className='new-post__image'
            src={previewImage}
            alt='new post'
            style={{ margin: 'auto', width: '100%' }}
          />
          <input
            className='new-post__caption'
            type='text'
            alt=''
            placeholder='Add a caption...'
            onChange={(e) => setCaption(e.target.value)}
            value={caption}
            style={{
              border: 'none',
              padding: '0 1rem',
              height: '40px',
              width: '100%',
              fontSize: '16px',
            }}
          />
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
