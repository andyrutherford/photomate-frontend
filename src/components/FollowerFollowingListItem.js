import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Avatar from '../styles/Avatar';

const FollowerFollowingListItemWrapper = styled.div`
  .profile {
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
  }

  .profile div {
    display: flex;
    justify-content: space-around;
    margin: auto 0;
  }

  .profile div a {
    margin: auto;
  }

  .profile div a img {
    display: block;
    margin: auto 1rem auto 0;
  }

  .profile div div {
    display: block;
  }

  .profile div div > :first-child {
    font-weight: bold;
  }
  .profile div div > :nth-child(2) {
    color: grey;
  }
`;

const FollowerFollowingListItem = ({ profile, onCancel }) => {
  return (
    <FollowerFollowingListItemWrapper>
      <div className='profile'>
        <div>
          <Link to={`/${profile.username}`}>
            <Avatar
              src={profile.avatar}
              alt={profile.username}
              onClick={onCancel}
            />
          </Link>
          <div>
            <Link
              className='black'
              to={`/${profile.username}`}
              onClick={onCancel}
            >
              {profile.username}
            </Link>
            <p>{profile.name}</p>
          </div>
        </div>
        <div>
          <Link to={`/${profile.username}`} onClick={onCancel}>
            Profile
          </Link>
        </div>
      </div>
    </FollowerFollowingListItemWrapper>
  );
};

export default FollowerFollowingListItem;
