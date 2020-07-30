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
  GET_SUGGESTED_USERS_SUCCESS,
  GET_SUGGESTED_USERS_FAIL,
  FOLLOW_USER_SUCCESS,
  UNFOLLOW_USER_SUCCESS,
  FOLLOW_UNFOLLOW_USER_FAIL,
} from './types';

import { loadUser } from './auth-actions';
import { toast } from 'react-toastify';

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
    toast('A problem occurred.  Please try again.');
  }
};

export const getUserById = (userId) => async (dispatch) => {
  try {
    const res = await api.get(`/user/${userId}`);
    dispatch({
      type: GET_USER_PROFILE_BY_ID_SUCCESS,
      payload: { isFollowing: res.data.youAreFollowing, user: res.data.user },
    });
    return res.data;
  } catch (error) {
    dispatch({
      type: GET_USER_PROFILE_BY_ID_FAIL,
    });
    toast('A problem occurred.  Please try again.');
    return error.response.data.message;
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
    toast.success('Your profile has been updated.');
  } catch (error) {
    dispatch({
      type: UPDATE_PROFILE_FAIL,
    });
    toast('A problem occurred.  Please try again.');
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
    toast('Your avatar has been changed.');
  } catch (error) {
    toast('A problem occurred.  Please try again.');
    dispatch({
      type: UPDATE_AVATAR_FAIL,
    });
  }
};

export const getSuggestedUsers = () => async (dispatch) => {
  try {
    const res = await api.get('/user/suggested');
    dispatch({
      type: GET_SUGGESTED_USERS_SUCCESS,
      payload: res.data.suggestedUsers,
    });
  } catch (error) {
    toast('A problem occurred.  Please try again.');
    dispatch({
      type: GET_SUGGESTED_USERS_FAIL,
    });
  }
};

export const followUser = (username) => async (dispatch) => {
  try {
    const res = await api.get(`/user/follow/${username}`);
    if (res.data.type === 'follow') {
      dispatch({
        type: FOLLOW_USER_SUCCESS,
      });
    } else if (res.data.type === 'unfollow') {
      dispatch({
        type: UNFOLLOW_USER_SUCCESS,
      });
    }
    dispatch(getUserById(username));
    toast(
      `You ${
        res.data.type === 'follow' ? 'are now following' : 'unfollowed'
      } ${username}.`
    );
  } catch (error) {
    toast('A problem occurred.  Please try again.');
    dispatch({
      type: FOLLOW_UNFOLLOW_USER_FAIL,
    });
  }
};
