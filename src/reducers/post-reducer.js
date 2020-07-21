import {
  GET_POSTS_SUCCESS,
  GET_POSTS_FAIL,
  UPLOAD_PHOTO_SUCCESS,
  UPLOAD_PHOTO_FAIL,
  CREATE_POST_SUCCESS,
  CREATE_POST_FAIL,
  CLEAR_CURRENT_POSTS,
  DELETE_POST_SUCCESS,
  DELETE_POST_FAIL,
  GET_POST_BY_ID_SUCCESS,
  GET_POST_BY_ID_FAIL,
  CLEAR_CURRENT_POST,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_FAIL,
} from '../actions/types';

const initialState = {
  loading: true,
  posts: [],
  currentPost: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: [...action.payload],
        loading: false,
      };
    case GET_POST_BY_ID_SUCCESS:
      return {
        ...state,
        currentPost: action.payload,
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
    case DELETE_POST_SUCCESS:
      return {
        ...state,
        posts: state.post.posts.filter((post) => post._id !== action.payload),
      };
    case CLEAR_CURRENT_POST:
      return {
        ...state,
        currentPost: {},
        loading: true,
      };
    case CLEAR_CURRENT_POSTS:
      return {
        ...state,
        posts: [],
        loading: true,
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        currentPost: {
          ...state.currentPost,
          comments: [...state.currentPost.comments, action.payload],
        },
      };
    case GET_POSTS_FAIL:
    case GET_POST_BY_ID_FAIL:
    case UPLOAD_PHOTO_FAIL:
    case CREATE_POST_FAIL:
    case DELETE_POST_FAIL:
    default:
      return state;
  }
}
