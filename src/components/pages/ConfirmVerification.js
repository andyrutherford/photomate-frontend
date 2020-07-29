import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { confirmVerify } from '../../utils/verification';

const ConfirmVerification = () => {
  const { token } = useParams();
  const [message, setMessage] = useState('');

  useEffect(() => {
    const confirmVerificationHandler = async () => {
      try {
        const res = await confirmVerify(token);
        setMessage(res.data.message);
      } catch (error) {
        if (error.response.status === 400 || error.response.status === 401)
          setMessage(error.response.data.message);
        else {
          setMessage('A problem occurred.  Please try again in a few minutes.');
        }
      }
    };
    confirmVerificationHandler();
  }, [token]);

  return <h1>{message && message}</h1>;
};

export default ConfirmVerification;
