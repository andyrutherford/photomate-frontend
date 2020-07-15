import React from 'react';
import styled from 'styled-components';

import avatar from '../assets/avatar.jpg';

const SettingsFormWrapper = styled.div`
  .settings-form-header {
    width: 280px;
    margin-left: 30px;
  }

  .settings-form-header > div {
    margin-left: 30px;
  }

  .form-group {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .form-label {
    margin-left: auto;
  }
`;

export const SettingsForm = ({
  username,
  name,
  website,
  bio,
  email,
  phoneNumber,
  gender,
}) => {
  return (
    <SettingsFormWrapper>
      <div className='form-group'>
        <img className='avatar' src={avatar} alt='avatar' />
        <div className='settings-form-header'>
          <h1>{username}</h1>
          <a href='#!'>Change Profile Photo</a>
        </div>
      </div>
      <div className='form-group'>
        <label className='form-label'>Name</label>
        <span>
          <input type='text' placeholder='Name' value={name} />
        </span>
      </div>
      <div className='form-group'>
        <label className='form-label'>Username</label>
        <input type='text' placeholder='username' value={username} />
      </div>
      <div className='form-group'>
        <label className='form-label'>Website</label>
        <input type='text' placeholder='website' value={website} />
      </div>
      <div className='form-group'>
        <label className='form-label'>Bio</label>
        <input type='text' placeholder='bio' value={bio} />
      </div>
      <div className='form-group'>
        <label className='form-label'>Email</label>
        <input type='email' placeholder='email' value={email} />
      </div>
      <div className='form-group'>
        <label className='form-label'>Phone Number</label>
        <input type='text' placeholder='' value={phoneNumber} />
      </div>
      <div className='form-group'>
        <label className='form-label'>Gender</label>
        <input type='text' placeholder='gender' value={gender} />
      </div>
    </SettingsFormWrapper>
  );
};
