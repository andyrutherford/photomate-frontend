import api from '../utils/api';
import axios from 'axios';

import {
  GET_POSTS_START,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  UPLOAD_PHOTO_START,
  UPLOAD_PHOTO_SUCCESS,
  UPLOAD_PHOTO_FAIL,
  CLEAR_CURRENT_POSTS,
  CLEAR_CURRENT_POST,
  CREATE_POST_START,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,
  DELETE_POST_START,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAIL,
  GET_POST_BY_ID_START,
  GET_POST_BY_ID_SUCCESS,
  GET_POST_BY_ID_FAIL,
} from './types';
import { getUserById } from './user-actions';

export const getPostsByUsername = (username) => async (dispatch) => {
  dispatch({
    type: GET_POSTS_START,
  });
  try {
    const res = await api.get(`/post/user/${username}`);
    dispatch({
      type: GET_POSTS_SUCCESS,
      payload: res.data.posts,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: GET_POSTS_FAIL,
    });
  }
};

export const getPostById = (postId) => async (dispatch) => {
  dispatch({
    type: GET_POST_BY_ID_START,
  });
  try {
    const res = await api.get(`/post/${postId}`);
    dispatch({
      type: GET_POST_BY_ID_SUCCESS,
      payload: res.data.post,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: GET_POST_BY_ID_FAIL,
    });
  }
};

export const clearCurrentPosts = () => (dispatch) => {
  dispatch({
    type: CLEAR_CURRENT_POSTS,
  });
};

export const clearCurrentPost = () => (dispatch) => {
  dispatch({
    type: CLEAR_CURRENT_POST,
  });
};

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

export const createPost = (imageUrl, caption, userId) => async (dispatch) => {
  dispatch({ type: CREATE_POST_START });
  try {
    const res = await api.post('/post/new', { imageUrl, caption });
    dispatch(getUserById(userId));
    return dispatch({ type: CREATE_POST_SUCCESS, payload: res.data.post });
  } catch (error) {
    dispatch({ type: CREATE_POST_FAIL });
    console.log(error.message);
  }
};

export const deletePostById = (postId, userId) => async (dispatch) => {
  dispatch({ type: DELETE_POST_START });
  try {
    await api.delete(`/post/${postId}`);
    dispatch(getUserById(userId));
    return dispatch({ type: DELETE_POST_SUCCESS, payload: postId });
  } catch (error) {
    dispatch({ type: DELETE_POST_FAIL });
    console.log(error.message);
  }
};
