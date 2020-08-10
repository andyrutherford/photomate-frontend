import axios from 'axios';
import api from './api';

export const changePassword = async (oldPassword, newPassword) => {
  try {
    const res = await api.put(
      process.env.NODE_ENV === 'development'
        ? '/auth'
        : `${process.env.REACT_APP_BACKEND_URL}/auth`,
      { oldPassword, newPassword }
    );
    return res.data.username;
  } catch (error) {
    throw error;
  }
};

export const forgotPassword = async (email) => {
  try {
    await axios.post(
      process.env.NODE_ENV === 'development'
        ? '/api/v1/mail/forgot-password'
        : `${process.env.REACT_APP_BACKEND_URL}/api/v1/mail/forgot-password`,
      { email },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const requestResetPassword = async (token) => {
  try {
    const res = await axios.get(
      process.env.NODE_ENV === 'development'
        ? '/api/v1/user/reset-password'
        : `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/reset-password`,
      {
        params: {
          token,
        },
      }
    );
    return res.data.user;
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

export const resetPassword = async (token, password) => {
  try {
    const res = await axios.post(
      process.env.NODE_ENV === 'development'
        ? '/api/v1/user/reset-password'
        : `${process.env.REACT_APP_BACKEND_URL}/api/v1/user/reset-password`,
      {
        token,
        password,
      }
    );
    return res.data.message;
  } catch (error) {
    throw error;
  }
};
