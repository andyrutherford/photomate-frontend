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
  LIKE_POST_SUCCESS,
  UNLIKE_POST_SUCCESS,
  LIKE_POST_FAIL,
  GET_FEED_SUCCESS,
  GET_FEED_FAIL,
  GET_SAVED_POSTS_SUCCESS,
  GET_SAVED_POSTS_FAIL,
  SAVE_POST_SUCCESS,
  SAVE_POST_FAIL,
  UNSAVE_POST_SUCCESS,
  LOGOUT,
} from '../actions/types';

const initialState = {
  loading: true,
  feed: [],
  posts: [],
  savedPosts: [],
  currentPost: {
    comments: [],
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_FEED_SUCCESS:
      return {
        ...state,
        feed: action.payload.feed,
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
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
        posts: state.posts.filter((post) => post._id !== action.payload),
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
    case GET_SAVED_POSTS_SUCCESS:
      return {
        ...state,
        savedPosts: action.payload,
        loading: false,
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        currentPost: {
          ...state.currentPost,
          comments: [...state.currentPost.comments, action.payload.comment],
        },
        feed: state.feed.map((item) => {
          if (item._id === action.payload.postId) {
            return {
              ...item,
              comments: [...item.comments, action.payload.comment],
            };
          } else return item;
        }),
      };
    case LIKE_POST_SUCCESS:
    case UNLIKE_POST_SUCCESS:
      return {
        ...state,
        currentPost: {
          ...state.currentPost,
          likes: action.payload.likes,
          likeCount: action.payload.likeCount,
        },
        feed: state.feed.map((item) => {
          if (item._id === action.payload.postId) {
            return {
              ...item,
              likes: action.payload.likes,
              likeCount: action.payload.likeCount,
            };
          } else return item;
        }),
      };
    case SAVE_POST_SUCCESS:
    case UNSAVE_POST_SUCCESS:
      return {
        ...state,
        savedPosts: action.payload,
      };
    case ADD_COMMENT_FAIL:
    case GET_POSTS_FAIL:
      return {
        ...state,
        loading: false,
      };
    case LOGOUT:
      return initialState;
    case GET_FEED_FAIL:
    case GET_POST_BY_ID_FAIL:
    case UPLOAD_PHOTO_FAIL:
    case CREATE_POST_FAIL:
    case DELETE_POST_FAIL:
    case LIKE_POST_FAIL:
    case GET_SAVED_POSTS_FAIL:
    case SAVE_POST_FAIL:
    default:
      return state;
  }
}
