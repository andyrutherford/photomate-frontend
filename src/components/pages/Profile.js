import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getUserById, clearCurrentUser } from '../../actions/user-actions';

import Spinner from '../layout/Spinner';
import ProfileHeader from '../ProfileHeader';
import PhotoGrid from '../PhotoGrid';

const Profile = ({ loading, getUserById, clearCurrentUser, currentUser }) => {
  const { username } = useParams();
  console.log(username);

  useEffect(() => {
    getUserById(username);
  }, []);

  // cleanup
  useEffect(() => {
    return () => clearCurrentUser();
  }, []);

  if (loading) return <Spinner />;

  return (
    <div>
      {currentUser ? (
        <>
          <ProfileHeader />
          <PhotoGrid />
        </>
      ) : (
        'User not found'
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser,
  loading: state.user.loading,
});

export default connect(mapStateToProps, { getUserById, clearCurrentUser })(
  Profile
);
