import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOAD_USER,
  SIGNUP_SUCCESS,
  SIGNUP_FAIL,
  LOGOUT,
  AUTH_ERROR,
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: false,
  loading: true,
  user: null,
  avatar: undefined,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case LOAD_USER:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
      };
    case SIGNUP_SUCCESS:
    case LOGIN_SUCCESS:
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
    case AUTH_ERROR:
    case SIGNUP_FAIL:
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
      };
    default:
      return {
        ...state,
      };
  }
}
