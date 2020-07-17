import api from '../utils/api';

import {
  LOAD_USER,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_ERROR,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGOUT,
} from './types';

export const loadUser = () => async (dispatch) => {
  console.log('load user action');
  try {
    const res = await api.get('/auth');
    dispatch({
      type: LOAD_USER,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
    });
    console.log(error.response.data.message);
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    const res = await api.post('/auth/login', {
      userID: userData.userID,
      password: userData.password,
    });
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
    alert('Login successful');
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
    });
    console.log(error.response.data.message);
    alert(error.response.data.message);
  }
};

export const signupUser = (userData) => async (dispatch) => {
  try {
    const res = await api.post('/auth/signup', {
      email: userData.email,
      name: userData.name,
      username: userData.username,
      password: userData.password,
    });
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
    alert('Signup successful');
  } catch (error) {
    dispatch({
      type: SIGNUP_FAIL,
    });
    console.log(error.response.data.message);
    alert(error.response.data.message);
  }
};

export const logoutUser = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
  console.log('You have been logged out.');
};
