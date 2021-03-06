import {
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  GET_USER_PROFILE_BY_ID_SUCCESS,
  GET_USER_PROFILE_BY_ID_FAIL,
  CLEAR_CURRENT_USER,
  UPDATE_AVATAR_START,
  UPDATE_AVATAR_SUCCESS,
  UPDATE_AVATAR_FAIL,
  GET_FEED_SUCCESS,
  GET_SUGGESTED_USERS_FAIL,
  LOGOUT,
} from '../actions/types';

const initialState = {
  suggestedUsers: [],
  currentUser: {
    profile: {
      bio: '',
      gender: '',
      phoneNumber: '',
      website: '',
    },
    avatar: '',
    _id: '',
    email: '',
    name: '',
    username: '',
  },
  loading: true,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        ...action.payload,
        loading: false,
      };
    case GET_FEED_SUCCESS:
      return {
        ...state,
        suggestedUsers: action.payload.suggestedUsers,
      };

    case UPDATE_PROFILE_SUCCESS: {
      return {
        ...state,
        profile: { ...action.payload },
      };
    }
    case GET_USER_PROFILE_BY_ID_SUCCESS: {
      return {
        ...state,
        currentUser: {
          ...action.payload.user,
          isFollowing: action.payload.isFollowing,
        },
        loading: false,
      };
    }
    case UPDATE_PROFILE_FAIL:
      return {
        ...state,
        currentUser: null,
      };
    case CLEAR_CURRENT_USER: {
      return {
        ...state,
        currentUser: initialState.currentUser,
        loading: true,
      };
    }
    case GET_USER_PROFILE_BY_ID_FAIL:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_AVATAR_START:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_AVATAR_SUCCESS:
      return {
        ...state,
        avatar: action.payload,
        loading: false,
      };
    case UPDATE_AVATAR_FAIL:
      return {
        ...state,
        loading: false,
      };
    case LOGOUT:
      return initialState;
    case GET_SUGGESTED_USERS_FAIL:
    case GET_PROFILE_FAIL:
    default:
      return state;
  }
}
