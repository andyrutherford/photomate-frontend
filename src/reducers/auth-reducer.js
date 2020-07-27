import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGOUT,
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: true,
  user: {
    username: '',
    name: '',
  },
  avatar: undefined,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
    case 'GITHUB_AUTH_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        loading: false,
      };
    case LOGOUT:
      return {
        ...state,
        isAuthenticated: false,
        token: null,
        loading: false,
      };
    case LOAD_USER_FAIL:
    case SIGNUP_FAIL:
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
      };
    case 'START_GITHUB_AUTH':
    default:
      return {
        ...state,
      };
  }
}
