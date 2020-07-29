import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';

const VerificationWrapper = styled.div`
  .settings-form-header {
    width: 333px;
    margin-left: 30px;
  }

  .avatar {
    margin: auto 0 auto auto;
  }

  .settings-form-header > div {
    margin-left: 30px;
  }

  input[id='change-avatar'],
  input[id='change-avatar-link'] {
    display: none;
  }

  span#change-avatar-click {
    cursor: pointer;
    color: #0095f6;
    font-weight: bold;
  }

  .form-group {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .form-label {
    margin-left: auto;
  }

  .form-group button {
    margin-left: auto;
  }
`;

const Verification = () => {
  return (
    <VerificationWrapper>
      <div className='form-group'>
        <label className='form-label'>Old Password</label>
        <input type='text' placeholder='' name='name' />
      </div>

      <div className='form-group'>
        <label className='form-label'>New Password</label>
        <input type='text' placeholder='' name='username' />
      </div>
      <div className='form-group'>
        <label className='form-label'>Confirm New Password</label>
        <input type='text' placeholder='' name='website' />
      </div>
    </VerificationWrapper>
  );
};

export default Verification;
