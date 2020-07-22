import api from '../utils/api';
import axios from 'axios';

import {
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  UPLOAD_PHOTO_START,
  UPLOAD_PHOTO_SUCCESS,
  UPLOAD_PHOTO_FAIL,
  CLEAR_CURRENT_POSTS,
  CLEAR_CURRENT_POST,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAIL,
  GET_POST_BY_ID_SUCCESS,
  GET_POST_BY_ID_FAIL,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAIL,
  LIKE_POST_SUCCESS,
  LIKE_POST_FAIL,
  GET_FEED_SUCCESS,
  GET_FEED_FAIL,
} from './types';
import { getUserById } from './user-actions';

export const getFeed = () => async (dispatch) => {
  try {
    const res = await api.get('/post/feed');
    dispatch({
      type: GET_FEED_SUCCESS,
      payload: res.data.feed.reverse(),
    });
  } catch (error) {
    console.log(error.message);
    dispatch({ type: GET_FEED_FAIL });
  }
};

export const getPostsByUsername = (username) => async (dispatch) => {
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
  try {
    const res = await api.post('/post/new', { imageUrl, caption });
    dispatch(getUserById(userId));
    dispatch({ type: CREATE_POST_SUCCESS, payload: res.data.post });
    dispatch(getFeed());
  } catch (error) {
    dispatch({ type: CREATE_POST_FAIL });
    console.log(error.message);
  }
};

export const deletePost = (postId) => async (dispatch) => {
  try {
    await api.delete(`/post/${postId}`);
    dispatch({ type: DELETE_POST_SUCCESS, payload: postId });
    return dispatch(getFeed());
  } catch (error) {
    dispatch({ type: DELETE_POST_FAIL });
    console.log(error.message);
  }
};

export const addComment = (postId, text) => async (dispatch) => {
  try {
    const res = await api.post(`/post/${postId}/comment`, { text });
    dispatch({
      type: ADD_COMMENT_SUCCESS,
      payload: res.data.comment,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: ADD_COMMENT_FAIL,
    });
  }
};

export const likePost = (postId) => async (dispatch) => {
  try {
    const res = await api.get(`/post/${postId}/like`);
    dispatch({
      type: LIKE_POST_SUCCESS,
      payload: {
        likes: res.data.post.likes,
        likeCount: res.data.post.likeCount,
      },
    });
    return dispatch(getFeed());
  } catch (error) {
    dispatch({
      type: LIKE_POST_FAIL,
    });
  }
};
