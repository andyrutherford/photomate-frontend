import api from '../utils/api';

import { LOAD_USER, LOGIN_SUCCESS, LOGIN_FAIL } from './types';

export const loadUser = () => async (dispatch) => {
  console.log('load user');
  try {
    const res = await api.get('/auth');
    dispatch({
      type: LOAD_USER,
    });
  } catch (error) {
    console.log(error.message);
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    const res = await api.post('/auth/login', {
      userID: userData.userID,
      password: userData.password,
    });
    console.log(res.data);
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
    alert('Login failed');
  }
};
