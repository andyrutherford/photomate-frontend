import {
  UPLOAD_PHOTO_SUCCESS,
  UPLOAD_PHOTO_FAIL,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,
} from '../actions/types';

const initialState = {
  loading: true,
  posts: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case UPLOAD_PHOTO_SUCCESS:
      return {
        ...state,
        image: action.payload,
        loading: false,
      };
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        loading: false,
      };
    case UPLOAD_PHOTO_FAIL:
    case CREATE_POST_FAIL:
    default:
      return state;
  }
}
