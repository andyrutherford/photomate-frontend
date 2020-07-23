import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import {
  getUserById,
  clearCurrentUser,
  followUser,
} from '../../actions/user-actions';
import {
  getPostsByUsername,
  clearCurrentPosts,
} from '../../actions/post-actions';

import Spinner from '../layout/Spinner';
import ProfileHeader from '../ProfileHeader';
import PhotoGrid from '../PhotoGrid';

const Profile = ({
  userLoading,
  postLoading,
  getUserById,
  getPostsByUsername,
  clearCurrentPosts,
  clearCurrentUser,
  currentUser,
  authUser,
  posts,
  profileOwner,
  followUser,
  isFollowing,
}) => {
  const { username } = useParams();

  useEffect(() => {
    getUserById(username);
    getPostsByUsername(username);
  }, [getUserById, getPostsByUsername, username]);

  // // cleanup
  // useEffect(() => {
  //   return () => clearCurrentUser();
  // }, [clearCurrentUser]);
  // useEffect(() => {
  //   return () => clearCurrentPosts();
  // }, [clearCurrentPosts]);

  if (userLoading || postLoading) return <Spinner />;

  return (
    <div>
      {currentUser && currentUser.posts ? (
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
          {posts.length >= 1 ? (
            <PhotoGrid posts={posts} />
          ) : (
            <h1>No posts found.</h1>
          )}
        </>
      ) : (
        'User not found'
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
  getPostsByUsername,
  clearCurrentUser,
  clearCurrentPosts,
  followUser,
})(Profile);
