import axios from 'axios';
// import store from '../store';

const api = axios.create({
  baseURL: '/api/v1',
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
