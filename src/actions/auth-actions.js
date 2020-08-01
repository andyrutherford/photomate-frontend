import { toast } from 'react-toastify';

import api from '../utils/api';

import {
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGOUT,
  GITHUB_AUTH_START,
  GITHUB_AUTH_SUCCESS,
  GITHUB_AUTH_FAIL,
} from './types';

export const loadUser = () => async (dispatch) => {
  try {
    const res = await api.get('/auth');
    dispatch({
      type: LOAD_USER_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: LOAD_USER_FAIL,
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
    toast.success('You have successfully logged in.');
  } catch (error) {
    dispatch({
      type: LOGIN_FAIL,
    });
    toast.error('Login failed.  Please try again.');
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
    toast('You have successfully created an account.');
  } catch (error) {
    dispatch({
      type: SIGNUP_FAIL,
    });
    toast('A problem occurred.  Please try again.');
  }
};

export const logoutUser = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
  toast('You have logged out.');
};

export const githubAuth = (code) => async (dispatch) => {
  dispatch({ type: GITHUB_AUTH_START });
  try {
    const res = await api.post('/auth/github', {
      code,
      state: sessionStorage.getItem('authState'),
    });
    dispatch({ type: GITHUB_AUTH_SUCCESS, payload: res.data });
    dispatch(loadUser());
    toast('You have successfully logged in with Github.');
  } catch (error) {
    dispatch({ type: GITHUB_AUTH_FAIL });
    toast('A problem occurred.  Please try again.');
  }
};
