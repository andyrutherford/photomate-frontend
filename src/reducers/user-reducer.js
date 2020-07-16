import { GET_PROFILE_SUCCESS, GET_PROFILE_FAIL } from '../actions/types';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    case GET_PROFILE_FAIL:
    default:
      return state;
  }
}