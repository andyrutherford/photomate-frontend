import api from './api';

export const requestVerify = async (email) => {
  try {
    await api.put('/mail/verify', { email });
  } catch (error) {
    throw error;
  }
};

export const confirmVerify = async (token) => {
  try {
    return await api.get(`/mail/verify/${token}`);
  } catch (error) {
    throw error;
  }
};
