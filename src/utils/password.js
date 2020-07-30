import api from './api';

export const changePassword = async (oldPassword, newPassword) => {
  try {
    const res = await api.put('/auth', { oldPassword, newPassword });
    return res.data.username;
  } catch (error) {
    throw error;
  }
};
