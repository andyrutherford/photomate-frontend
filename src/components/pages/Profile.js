import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  getUserById,
  clearCurrentUser,
  followUser,
} from '../../actions/user-actions';
import { getSavedPosts, clearCurrentPosts } from '../../actions/post-actions';

import Loading from './Loading';
import ProfileHeader from '../ProfileHeader';
import PhotoGrid from '../PhotoGrid';

const Profile = ({
  userLoading,
  getUserById,
  currentUser,
  profileOwner,
  followUser,
  isFollowing,
  clearCurrentUser,
  clearCurrentPosts,
}) => {
  const [notFound, setNotFound] = useState(false);
  const { username } = useParams();

  useEffect(() => {
    getUserById(username).then((res) => {
      if (res === 'User not found.') {
        return setNotFound(true);
      }
    });
  }, [getUserById, username]);

  // cleanup
  useEffect(() => {
    return () => clearCurrentUser();
  }, [clearCurrentUser]);
  useEffect(() => {
    return () => clearCurrentPosts();
  }, [clearCurrentPosts]);

  if (notFound) return <h1>User not found.</h1>;
  if (userLoading) return <Loading />;

  return (
    <div>
      {currentUser && currentUser.posts && (
        <>
          <ProfileHeader
            avatar={currentUser.avatar}
            name={currentUser.name}
            username={currentUser.username}
            posts={currentUser.posts.length}
            followUser={() => followUser(currentUser.username)}
            following={currentUser.following}
            followingCount={currentUser.followingCount}
            followers={currentUser.followers}
            followerCount={currentUser.followerCount}
            profileOwner={profileOwner}
            isFollowing={isFollowing}
          />
          <PhotoGrid profileOwner={profileOwner} />
        </>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  authUser: state.auth.user.username,
  currentUser: state.user.currentUser,
  isFollowing: state.user.currentUser.isFollowing,
  userLoading: state.user.loading,
  postLoading: state.post.loading,
  posts: state.post.posts,
  profileOwner: state.user.currentUser.username === state.auth.user.username,
});

export default connect(mapStateToProps, {
  getUserById,
  getSavedPosts,
  clearCurrentUser,
  clearCurrentPosts,
  followUser,
})(Profile);
