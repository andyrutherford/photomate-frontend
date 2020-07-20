import {
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  UPLOAD_PHOTO_SUCCESS,
  UPLOAD_PHOTO_FAIL,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,
  CLEAR_CURRENT_POSTS,
} from '../actions/types';

const initialState = {
  loading: true,
  posts: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: [...action.payload],
        loading: false,
      };
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
    case CLEAR_CURRENT_POSTS:
      return {
        ...state,
        posts: [],
        loading: true,
      };
    case GET_POSTS_FAIL:
    case UPLOAD_PHOTO_FAIL:
    case CREATE_POST_FAIL:
    default:
      return state;
  }
}
