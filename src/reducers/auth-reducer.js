import { LOGIN_SUCCESS, LOGIN_FAIL, LOAD_USER } from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: true,
  user: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        loading: false,
      };
    case LOGIN_FAIL:
    default:
      return state;
  }
}
