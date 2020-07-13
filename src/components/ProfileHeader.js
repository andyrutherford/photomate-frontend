import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { GearIcon, CircleIcon } from '../components/Icons';

const ProfileHeaderWrapper = styled.div`
  display: flex;

  .profile-image {
    height: 200px;
    width: 200px;
    margin-right: 60px;
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

const ProfileHeader = () => {
  return (
    <ProfileHeaderWrapper>
      <div className='profile-image'>
        <CircleIcon size={195} strokeWidth={0.1} />
      </div>
      <div className='profile-info'>
        <div className='profile-info-primary'>
          <h1>cosmoKramer</h1>
          <button className='edit-profile-btn'>Edit Profile</button>
          <Link to='/profile/edit'>
            <GearIcon />
          </Link>
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
        <div className='profile-info-name'>Cosmo Kramer</div>
      </div>
    </ProfileHeaderWrapper>
  );
};

export default ProfileHeader;
