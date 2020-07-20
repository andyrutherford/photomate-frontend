import React from 'react';
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

const ProfileHeader = ({
  authUser,
  currentUser,
  avatar,
  name,
  username,
  posts,
  following,
  followers,
  authUserIsCurrentUser,
}) => {
  return (
    <ProfileHeaderWrapper>
      <div className='profile-image'>
        <img src={avatar} alt='avatar' />
      </div>
      <div className='profile-info'>
        <div className='profile-info-primary'>
          <h1>{username}</h1>
          {authUserIsCurrentUser && (
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
            <span>{posts} posts</span>
          </li>
          <li>
            <span>{followers} followers</span>
          </li>
          <li>
            <span>{following} following</span>
          </li>
        </ul>
        <div className='profile-info-name'>{name}</div>
      </div>
    </ProfileHeaderWrapper>
  );
};

export default ProfileHeader;
