import api from '../utils/api';
import axios from 'axios';

import {
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  GET_USER_PROFILE_BY_ID_SUCCESS,
  GET_USER_PROFILE_BY_ID_FAIL,
  CLEAR_CURRENT_USER,
  UPDATE_AVATAR_START,
  UPDATE_AVATAR_SUCCESS,
  UPDATE_AVATAR_FAIL,
} from './types';

import { loadUser } from './auth-actions';

export const getProfile = () => async (dispatch) => {
  try {
    const res = await api.get('/user');
    dispatch({
      type: GET_PROFILE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_PROFILE_FAIL,
    });
    console.log(error.response.data.message);
  }
};

export const getUserById = (userId) => async (dispatch) => {
  try {
    const res = await api.get(`/user/${userId}`);
    dispatch({
      type: GET_USER_PROFILE_BY_ID_SUCCESS,
      payload: res.data.user,
    });
  } catch (error) {
    dispatch({
      type: GET_USER_PROFILE_BY_ID_FAIL,
    });
    console.log(error.response.data.message);
  }
};

export const clearCurrentUser = () => (dispatch) => {
  dispatch({
    type: CLEAR_CURRENT_USER,
  });
};

export const updateProfile = (profileData) => async (dispatch) => {
  try {
    const res = await api.put('/user', profileData);
    dispatch({
      type: UPDATE_PROFILE_SUCCESS,
      payload: res.data.user.profile,
    });
    alert('Your profile has been updated.');
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
    });
    console.log(error.response.data.message);
  }
};

export const changeAvatar = (avatar, token) => async (dispatch) => {
  dispatch({
    type: UPDATE_AVATAR_START,
  });
  const formData = new FormData();
  formData.append('image', avatar);

  try {
    const res = await axios.put('/api/v1/user/avatar', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        authorization: 'Bearer ' + token,
      },
    });

    dispatch(loadUser());
    dispatch({
      type: UPDATE_AVATAR_SUCCESS,
      payload: res.data.avatar,
    });
  } catch (error) {
    console.log(error.message);
    dispatch({
      type: UPDATE_AVATAR_FAIL,
    });
  }
};
