import {
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAIL,
  UPDATE_PROFILE_SUCCESS,
  UPDATE_PROFILE_FAIL,
  GET_USER_PROFILE_BY_ID_SUCCESS,
  GET_USER_PROFILE_BY_ID_FAIL,
} from '../actions/types';

const initialState = {
  profile: {},
  currentUser: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        ...action.payload,
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
        currentUser: action.payload,
      };
    }
    case UPDATE_PROFILE_FAIL:
    case GET_PROFILE_FAIL:
    case GET_USER_PROFILE_BY_ID_FAIL:
    default:
      return state;
  }
}
