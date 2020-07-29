import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import Button from '../../styles/Button';
import placeholderAvatar from '../../assets/avatar.jpg';
import spinner from '../layout/spinner.gif';
import Avatar from '../../styles/Avatar';

import { changeAvatar } from '../../actions/user-actions';

const SettingsFormWrapper = styled.form`
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

  .form-group button {
    margin-left: auto;
  }
`;

export const SettingsForm = ({
  updateProfile,
  changeAvatar,
  user: {
    username,
    avatar = placeholderAvatar,
    name,
    email,
    profile: { bio, gender, phoneNumber, website },
  },
  token,
  loading,
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
      username: username || '',
      email: email || '',
      name: name || '',
      bio: bio || '',
      gender: gender || '',
      phoneNumber: phoneNumber || '',
      website: website || '',
    });
  }, [username, email, name, bio, gender, phoneNumber, website]);

  const onChangeAvatar = async (e) => {
    if (e.target.files[0]) {
      try {
        await changeAvatar(e.target.files[0], token);
      } catch (error) {
        alert('An error occurred.  Please try again.');
      }
    }
  };

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
        <Avatar
          md
          className='avatar'
          src={loading ? spinner : avatar}
          alt='avatar'
        />
        <div className='settings-form-header'>
          <h1>{formData.username}</h1>
          <label htmlFor='change-avatar-link'>
            <span id='change-avatar-click'>Change Profile Photo</span>
          </label>
          <input
            id='change-avatar-link'
            accept='image/*'
            type='file'
            onChange={onChangeAvatar}
          />
        </div>
      </div>
      <div className='form-group'>
        <label className='form-label'>Name</label>
        <input
          disabled
          type='text'
          placeholder='Name'
          name='name'
          value={formData.name}
          onChange={onChange}
        />
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

const mapStateToProps = (state) => ({
  token: state.auth.token,
  loading: state.user.loading,
});

export default connect(mapStateToProps, { changeAvatar })(SettingsForm);
