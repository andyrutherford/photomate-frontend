import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { GearIcon } from '../components/Icons';

const ProfileHeaderWrapper = styled.div`
  display: flex;

  .profile-image {
    margin-right: 60px;
  }

  .profile-image img {
    border-radius: 100px;
    height: 200px;
    width: 200px;
  }

  .profile-info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 30px 0;
  }

  .profile-info-primary {
    display: flex;
    flex-direction: row;
  }

  .profile-info-primary > :nth-child(2) {
    margin: 0 20px;
  }

  .edit-profile-btn {
    background-color: transparent;
    border-radius: 4px;
    border: 1px solid lightgrey;
    font-size: 14px;
    font-weight: bold;
    padding: 4px 9px;
    height: 30px;
  }

  .profile-info-secondary {
    display: flex;
    flex-direction: row;
    list-style: none;
  }

  .profile-info-secondary li {
    margin-right: 40px;
  }

  .profile-info-name {
    font-weight: bold;
  }
`;

const ProfileHeader = ({ authUser, currentUser }) => {
  // TODO
  // if /username === user in state.user -> populate fields GET_PROFILE action
  // if not -> run GET_PROFILE_BY_USERNAME action

  return (
    <ProfileHeaderWrapper>
      <div className='profile-image'>
        <img src={currentUser.avatar} alt='avatar' />
      </div>
      <div className='profile-info'>
        <div className='profile-info-primary'>
          <h1>{currentUser.username}</h1>
          {authUser && authUser.username === currentUser.username && (
            <>
              <Link className='edit-profile-btn' to='/accounts/edit'>
                Edit Profile
              </Link>
              <Link to='/profile/edit'>
                <GearIcon />
              </Link>
            </>
          )}
        </div>
        <ul className='profile-info-secondary'>
          <li>
            <span>148 posts</span>
          </li>
          <li>
            <span>361 followers</span>
          </li>
          <li>
            <span>592 following</span>
          </li>
        </ul>
        <div className='profile-info-name'>{currentUser.name}</div>
      </div>
    </ProfileHeaderWrapper>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  authUser: state.auth.user,
});

export default connect(mapStateToProps)(ProfileHeader);
