import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Button from '../styles/Button';
import avatar from '../assets/avatar.jpg';

const SettingsFormWrapper = styled.form`
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

  .form-group button {
    margin-left: auto;
  }
`;

export const SettingsForm = ({
  updateProfile,
  user: {
    username,
    name,
    email,
    profile: { bio, gender, phoneNumber, website },
  },
}) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    name: '',
    bio: '',
    gender: '',
    phoneNumber: '',
    website: '',
  });

  // Populate form with user data from props
  useEffect(() => {
    setFormData({
      ...setFormData,
      username,
      email,
      name,
      bio,
      gender,
      phoneNumber,
      website,
    });
  }, [username, email, name, bio, gender, phoneNumber, website]);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updateProfile(formData);
  };

  // updateProfile route in backend only accepts profile fields
  return (
    <SettingsFormWrapper onSubmit={onSubmit}>
      <div className='form-group'>
        <img className='avatar' src={avatar} alt='avatar' />
        <div className='settings-form-header'>
          <h1>{formData.username}</h1>
          <a href='#!'>Change Profile Photo</a>
        </div>
      </div>
      <div className='form-group'>
        <label className='form-label'>Name</label>
        <span>
          <input
            disabled
            type='text'
            placeholder='Name'
            name='name'
            value={formData.name}
            onChange={onChange}
          />
        </span>
      </div>
      <div className='form-group'>
        <label className='form-label'>Username</label>
        <input
          disabled
          type='text'
          placeholder='username'
          name='username'
          value={formData.username}
          onChange={onChange}
        />
      </div>
      <div className='form-group'>
        <label className='form-label'>Website</label>
        <input
          type='text'
          placeholder='website'
          name='website'
          value={formData.website}
          onChange={onChange}
        />
      </div>
      <div className='form-group'>
        <label className='form-label'>Bio</label>
        <input
          type='text'
          placeholder='bio'
          name='bio'
          value={formData.bio}
          onChange={onChange}
        />
      </div>
      <div className='form-group'>
        <label className='form-label'>Email</label>
        <input
          type='email'
          placeholder='email'
          name='email'
          disabled
          value={formData.email}
          onChange={onChange}
        />
      </div>
      <div className='form-group'>
        <label className='form-label'>Phone Number</label>
        <input
          type='number'
          placeholder=''
          name='phoneNumber'
          value={formData.phoneNumber}
          onChange={onChange}
        />
      </div>
      <div className='form-group'>
        <label className='form-label'>Gender</label>
        <select
          name='gender'
          id='gender'
          onChange={onChange}
          value={formData.gender}
        >
          <option value='male'>Male</option>
          <option value='female'>Female</option>
          <option value='other'>Other</option>
        </select>
      </div>
      <div className='form-group'>
        <Button>Submit</Button>
      </div>
    </SettingsFormWrapper>
  );
};

export default SettingsForm;
