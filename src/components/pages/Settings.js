import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { getProfile, updateProfile } from '../../actions/user-actions';
import Button from '../../styles/Button';

import SettingsForm from '../settings/SettingsForm';
import ChangePassword from '../settings/ChangePassword';
import RequestVerification from '../settings/RequestVerification';

const SettingsWrapper = styled.div`
  border: 0.5px solid lightgray;
  border-radius: 3px;
  background-color: white;
  display: flex;

  select,
  input {
    border: 1px solid lightgrey;
    border-radius: 3px;
    font-size: 16px;
    height: 32px;
    padding: 0 10px;
    width: 333px;
    margin-left: 30px;
  }

  .settings-menu {
    flex-basis: 236px;
  }
  .settings-contents {
    border-left: 0.5px solid lightgrey;
    padding: 36px 100px 36px;
    width: 100%;
  }

  @media screen and (max-width: 500px) {
    flex-direction: column;
    flex-basis: 0px;

    .settings-menu {
      flex-basis: 0px;
    }
    .settings-contents {
      padding: 20px;
    }
  }
`;

const Settings = ({ getProfile, updateProfile, user }) => {
  const [tab, setTab] = useState(1);

  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return (
    <SettingsWrapper>
      <div className='settings-menu'>
        <ul>
          <li>
            <Button link onClick={() => setTab(1)}>
              Edit Profile
            </Button>
          </li>
          <li>
            <Button link onClick={() => setTab(2)}>
              Change Password
            </Button>
          </li>
          <li>
            <Button link onClick={() => setTab(3)}>
              Request Verification
            </Button>
          </li>
        </ul>
      </div>
      <div className='settings-contents'>
        {/* {user && user.profile && (
          <SettingsForm user={user} updateProfile={updateProfile} />
        )} */}
        {tab === 1 && user && user.profile && (
          <SettingsForm user={user} updateProfile={updateProfile} />
        )}
        {tab === 2 && <ChangePassword />}
        {tab === 3 && <RequestVerification />}
      </div>
    </SettingsWrapper>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { getProfile, updateProfile })(
  Settings
);
