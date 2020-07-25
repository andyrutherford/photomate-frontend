import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { getProfile, updateProfile } from '../../actions/user-actions';

import SettingsForm from '../SettingsForm';

const SettingsWrapper = styled.div`
  border: 0.5px solid lightgray;
  border-radius: 3px;
  background-color: white;
  display: flex;

  li {
    list-style: none;
  }

  select,
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
`;

const Settings = ({ getProfile, updateProfile, user, isAuthenticated }) => {
  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return isAuthenticated ? (
    <SettingsWrapper>
      <div className='settings-menu'>
        <ul>
          <li>Edit Profile</li>
          <li>Change Password</li>
        </ul>
      </div>
      <div className='settings-contents'>
        {user && user.profile ? (
          <SettingsForm user={user} updateProfile={updateProfile} />
        ) : (
          'Loading'
        )}
      </div>
    </SettingsWrapper>
  ) : (
    <Redirect to='/login' />
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getProfile, updateProfile })(
  Settings
);
