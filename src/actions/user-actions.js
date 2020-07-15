import api from '../utils/api';

import { GET_PROFILE_SUCCESS, GET_PROFILE_FAIL } from './types';

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
