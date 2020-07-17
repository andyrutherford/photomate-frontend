import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { getUserById } from '../../actions/user-actions';

import ProfileHeader from '../ProfileHeader';
import PhotoGrid from '../PhotoGrid';

const Profile = ({ getUserById, user }) => {
  const { username } = useParams();
  console.log(username);

  useEffect(() => {
    getUserById(username);
  }, []);

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

export default connect(mapStateToProps, { getUserById })(Profile);
