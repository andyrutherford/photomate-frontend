import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Modal from '../components/modal/Modal';
import FollowerFollowingListItem from './FollowerFollowingListItem';
import { GearIcon, UserCheckIcon } from '../components/Icons';
import Avatar from '../styles/Avatar';
import Button from '../styles/Button';

const ProfileHeaderWrapper = styled.div`
  display: flex;

  h1 {
    font-size: 2rem;
    font-weight: 100;
  }

  a {
    display: inherit;
    margin: 0 0 0 10px;
  }

  li {
    margin: auto 20px auto 0;
  }

  svg {
    margin: auto;
  }

  .profile-image {
    margin-right: 60px;
  }

  .profile-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px 0;
  }

  .profile-info-primary {
    display: flex;
    flex-direction: row;
  }

  .profile-info-primary button {
    margin: auto 0 auto 20px;
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
  avatar,
  name,
  username,
  posts,
  following,
  followingCount,
  followers,
  followerCount,
  profileOwner,
  followUser,
  isFollowing,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState('');
  const history = useHistory();

  const showFollowingFollowerHandler = () => {
    if (modalContent === 'Following') {
      return following.map((user) => (
        <FollowerFollowingListItem
          following
          profile={user}
          onCancel={() => setShowModal(false)}
        />
      ));
    } else if (modalContent === 'Followers') {
      return followers.map((user) => (
        <FollowerFollowingListItem
          followers
          profile={user}
          onCancel={() => setShowModal(false)}
        />
      ));
    }
  };

  const modalHandler = (content) => {
    setModalContent(content);
    setShowModal(true);
  };

  return (
    <ProfileHeaderWrapper>
      <div className='profile-image'>
        <Avatar xl src={avatar} alt='avatar' />
      </div>
      <div className='profile-info'>
        <div className='profile-info-primary'>
          <h1>{username}</h1>
          {profileOwner ? (
            <>
              <Button secondary onClick={() => history.push('/accounts/edit')}>
                Edit Profile
              </Button>
              <Link to='/profile/edit'>
                <GearIcon />
              </Link>
            </>
          ) : (
            <>
              <Button
                {...(isFollowing ? { secondary: true } : { primary: true })}
                onClick={followUser}
              >
                {isFollowing ? 'Unfollow' : 'Follow'}
              </Button>
            </>
          )}
        </div>
        <ul className='profile-info-secondary'>
          <li>
            <span>{posts} posts</span>
          </li>
          <li>
            {followerCount === 0 ? (
              <span>{followerCount} followers</span>
            ) : (
              <Button link onClick={() => modalHandler('Followers')}>
                {followerCount} followers
              </Button>
            )}
          </li>
          <li>
            {followingCount === 0 ? (
              <span>{followingCount} following</span>
            ) : (
              <Button link onClick={() => modalHandler('Following')}>
                {followingCount} following
              </Button>
            )}
          </li>
        </ul>
        <div className='profile-info-name'>{name}</div>
      </div>
      {showModal && (
        <Modal
          followerFollowing
          header={modalContent}
          noFooter
          show={true}
          className='modal-mini'
          style={{ borderRadius: '12px' }}
          onCancel={() => setShowModal(false)}
        >
          {showFollowingFollowerHandler()}
        </Modal>
      )}
    </ProfileHeaderWrapper>
  );
};

export default ProfileHeader;
