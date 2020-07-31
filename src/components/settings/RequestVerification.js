import React, { useState } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';

import Button from '../../styles/Button';
import verifiedBadge from '../../assets/verified.png';

import { requestVerify } from '../../utils/verification';
import { toast } from 'react-toastify';

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

  .verified-badge {
    height: 20px;
    width: 20px;
    margin: 10px 0 0 5px;
  }
`;

const RequestVerification = ({ authUser, isVerified }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const requestVerificationHandler = async (e) => {
    e.preventDefault();

    if (email !== authUser) {
      return toast.error('The email address is incorrect.');
    }
    setLoading(true);
    try {
      await requestVerify(email);
      toast.success('Please check your email for further instructions.');
      setLoading(false);
    } catch (error) {
      if (error.response.status === 403)
        toast.error('The email address is incorrect.');
      else toast('A problem occurred.  Please try again in a few minutes.');
      setLoading(false);
    }
  };

  return (
    <RequestVerificationWrapper>
      <h1>
        Verified Badges{' '}
        <img src={verifiedBadge} className='verified-badge' alt='verified' />
      </h1>
      <p>
        Verified badges help people more easily find the public figures,
        celebrities and brands they want to follow.
      </p>
      {isVerified ? (
        <p style={{ fontWeight: 'bold', marginTop: '15px' }}>
          You are already verified.
        </p>
      ) : (
        <>
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
              <Button
                type='submit'
                value='Submit'
                onClick={requestVerificationHandler}
                disabled={loading}
              >
                {loading ? 'Submitting...' : 'Submit'}
              </Button>
            </div>
          </form>
        </>
      )}
    </RequestVerificationWrapper>
  );
};

const mapStateToProps = (state) => ({
  authUser: state.auth.user.email,
  isVerified: state.user.verified,
});

export default connect(mapStateToProps)(RequestVerification);
