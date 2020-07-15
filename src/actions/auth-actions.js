import api from '../utils/api';

import { LOAD_USER, LOGIN_SUCCESS, LOGIN_FAIL, AUTH_ERROR } from './types';

export const loadUser = () => async (dispatch) => {
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
    console.log(error.response.data.message);
    alert(error.response.data.message);
  }
};
