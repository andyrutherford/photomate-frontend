import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import { getProfile } from '../../actions/user-actions';

import ProfileHeader from '../ProfileHeader';
import PhotoGrid from '../PhotoGrid';

const Profile = ({ getProfile }) => {
  useEffect(() => {
    getProfile();
  }, []);
  return (
    <div>
      <ProfileHeader />
      <PhotoGrid />
    </div>
  );
};

export default connect(null, { getProfile })(Profile);
