import React from 'react';
import styled from 'styled-components';

import avatar from '../../assets/avatar.jpg';

const SettingsWrapper = styled.div`
  border: 0.5px solid lightgray;
  border-radius: 3px;
  background-color: white;
  display: flex;

  li {
    list-style: none;
  }

  input {
    border: 1px solid lightgrey;
    border-radius: 3px;
    font-size: 16px;
    height: 32px;
    padding: 0 10px;
    width: 280px;
    margin-left: 30px;
  }

  .avatar {
    height: 42px;
    width: 42px;
    border-radius: 100px;
    object-fit: cover;
    margin: auto 0 auto auto;
  }

  .settings-menu {
    flex-basis: 236px;
  }
  .settings-contents {
    border-left: 0.5px solid lightgrey;
    padding: 36px 45px;
    width: 100%;
  }

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

const Settings = () => {
  return (
    <SettingsWrapper>
      <div className='settings-menu'>
        <ul>
          <li>Edit Profile</li>
          <li>Change Password</li>
        </ul>
      </div>
      <div className='settings-contents'>
        <form className='settings-form'>
          <div className='form-group'>
            <img className='avatar' src={avatar} alt='avatar' />
            <div className='settings-form-header'>
              <h1>cosmo</h1>
              <a href='#!'>Change Profile Photo</a>
            </div>
          </div>
          <div className='form-group'>
            <label className='form-label'>Name</label>
            <span>
              <input type='text' placeholder='Name' />
            </span>
          </div>
          <div className='form-group'>
            <label className='form-label'>Username</label>
            <input type='text' placeholder='username' />
          </div>
          <div className='form-group'>
            <label className='form-label'>Website</label>
            <input type='text' placeholder='website' />
          </div>
          <div className='form-group'>
            <label className='form-label'>Bio</label>
            <input type='text' placeholder='bio' />
          </div>
          <div className='form-group'>
            <label className='form-label'>Email</label>
            <input type='email' placeholder='email' />
          </div>
          <div className='form-group'>
            <label className='form-label'>Phone Number</label>
            <input type='text' placeholder='phone number' />
          </div>
          <div className='form-group'>
            <label className='form-label'>Gender</label>
            <input type='text' placeholder='gender' />
          </div>
        </form>
      </div>
    </SettingsWrapper>
  );
};

export default Settings;
