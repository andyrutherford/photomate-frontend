import axios from 'axios';
import api from './api';

export const changePassword = async (oldPassword, newPassword) => {
  try {
    const res = await api.put('/auth', { oldPassword, newPassword });
    return res.data.username;
  } catch (error) {
    throw error;
  }
};

export const forgotPassword = async (email) => {
  try {
    const res = await axios.post(
      '/api/v1/mail/forgot-password',
      { email },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    console.log(res.data);
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
