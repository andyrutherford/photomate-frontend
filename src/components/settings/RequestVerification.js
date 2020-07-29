import React, { useState } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

import Button from '../../styles/Button';

import { requestVerify } from '../../utils/verification';

const RequestVerificationWrapper = styled.div`
  .form-group {
    display: flex;
    justify-content: center;
    margin-bottom: 16px;
    margin-top: 20px;
  }

  .form-group button {
    margin-left: auto;
  }
`;

const RequestVerification = ({ authUser }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const requestVerificationHandler = async (e) => {
    e.preventDefault();
    setMessage('');
    if (email !== authUser) {
      return setMessage('The email address is incorrect.');
    }
    setLoading(true);
    try {
      await requestVerify(email);
      setMessage('Please check your email for further instructions.');
      setLoading(false);
    } catch (error) {
      console.log(error.message);
      if (error.response.status === 403)
        setMessage('The email address is incorrect.');
      else
        setMessage('A problem occurred.  Please try again in a few minutes.');
      setLoading(false);
    }
  };

  return (
    <RequestVerificationWrapper>
      <h1>Verified Badges</h1>
      <p>
        Verified badges help people more easily find the public figures,
        celebrities and brands they want to follow.
      </p>
      <p>
        To become verified, please enter the email address you used when
        creating your account:
      </p>
      <form>
        <div className='form-group'>
          <label className='form-label'>Email</label>
          <input
            type='text'
            placeholder=''
            name='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>{' '}
        <div className='form-group'>
          <span>{message && message}</span>
          <Button
            type='submit'
            value='Submit'
            onClick={requestVerificationHandler}
            disabled={
              message === 'Please check your email for further instructions.'
            }
          >
            {loading ? 'Submitting...' : 'Submit'}
          </Button>
        </div>
      </form>
    </RequestVerificationWrapper>
  );
};

const mapStateToProps = (state) => ({
  authUser: state.auth.user.email,
});

export default connect(mapStateToProps)(RequestVerification);
