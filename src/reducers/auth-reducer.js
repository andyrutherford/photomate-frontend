import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_USER_SUCCESS,
  LOAD_USER_FAIL,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGOUT,
  GITHUB_AUTH_START,
  GITHUB_AUTH_SUCCESS,
  GITHUB_AUTH_FAIL,
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
    case GITHUB_AUTH_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        token: action.payload.token,
        loading: false,
      };
    case LOGOUT:
      return { ...initialState, token: null };
    case LOAD_USER_FAIL:
    case SIGNUP_FAIL:
    case LOGIN_FAIL:
    case GITHUB_AUTH_FAIL:
      return {
        ...state,
        loading: false,
      };
    case GITHUB_AUTH_START:
    default:
      return {
        ...state,
      };
  }
}
