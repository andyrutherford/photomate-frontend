import api from '../utils/api';

import {
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  GET_USER_PROFILE_BY_ID_SUCCESS,
  GET_USER_PROFILE_BY_ID_FAIL,
  CLEAR_CURRENT_USER,
} from './types';

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
  console.log('get user by id ');
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
