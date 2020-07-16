import React from 'react';

import { connect } from 'react-redux';
// import { getProfile } from '../../actions/user-actions';

import ProfileHeader from '../ProfileHeader';
import PhotoGrid from '../PhotoGrid';

const Profile = ({ user }) => {
  return (
    <div>
      {user && <ProfileHeader user={user} />}
      <PhotoGrid />
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps)(Profile);
