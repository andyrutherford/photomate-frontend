import axios from 'axios';
// import store from '../store';

const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? '/api/v1'
      : `${process.env.REACT_APP_BACKEND_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err.response.data.msg === 'Token is not valid') {
      //   Dispatch logout / unauth action
    }
    return Promise.reject(err);
  }
);

export default api;
