import api from '../utils/api';
import axios from 'axios';

import {
  UPLOAD_PHOTO_START,
  UPLOAD_PHOTO_SUCCESS,
  UPLOAD_PHOTO_FAIL,
  CREATE_POST_START,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,
} from './types';

export const uploadImage = (file, token) => async (dispatch) => {
  dispatch({
    type: UPLOAD_PHOTO_START,
  });
  const formData = new FormData();
  formData.append('image', file);

  try {
    const res = await axios.post('/api/v1/post/new/image', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        authorization: 'Bearer ' + token,
      },
    });

    dispatch({
      type: UPLOAD_PHOTO_SUCCESS,
      payload: res.data.image,
    });

    return res.data.image;
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: UPLOAD_PHOTO_FAIL,
    });
  }
};

export const createPost = (imageUrl, caption) => async (dispatch) => {
  console.log('create post action');
  dispatch({ type: CREATE_POST_START });
  try {
    const res = await api.post('/post/new', { imageUrl, caption });
    return dispatch({ type: CREATE_POST_SUCCESS, payload: res.data.post });
  } catch (error) {
    dispatch({ type: CREATE_POST_FAIL });
    console.log(error.message);
  }
};
