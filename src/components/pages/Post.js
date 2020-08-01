import React, { useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import Spinner from '../layout/Spinner';
import PostImage from '../post/PostImage';
import PostHeader from '../post/PostHeader';
import PostInfo from '../post/PostInfo';
import PostActions from '../post/PostActions';
import PostAddComment from '../post/PostAddComment';

import {
  getPostById,
  deletePost,
  addComment,
  likePost,
  savePost,
  getSavedPosts,
} from '../../actions/post-actions';

const PostWrapper = styled.div`
  display: flex;

  .post-right {
    background-color: #fff;
    border: 1px solid #d3d3d3;
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
    display: flex;
    flex-direction: column;
    width: 300px;
  }
`;

const Post = ({
  postLiked,
  getPostById,
  deletePost,
  likePost,
  addComment,
  loading,
  post,
  postOwner,
  savedPosts,
  savePost,
  getSavedPosts,
}) => {
  const { postId } = useParams();

  useEffect(() => {
    getSavedPosts();
    getPostById(postId);
  }, [getPostById, postId, getSavedPosts]);

  if (loading) return <Spinner />;

  return (
    <PostWrapper>
      <PostImage image={post.image} caption={post.caption} />
      <div className='post-right'>
        {post.user && (
          <>
            <PostHeader
              username={post.user.username}
              avatar={post.user.avatar}
              deletePost={deletePost}
              postId={postId}
              postOwner={postOwner}
            />

            <PostInfo
              username={post.user.username}
              avatar={post.user.avatar}
              caption={post.caption}
              comments={post.comments}
            />
            <PostActions
              postId={postId}
              isLiked={postLiked}
              likeCount={post.likeCount}
              createdAt={post.createdAt}
              likePost={likePost}
              savePost={savePost}
              isSaved={savedPosts.includes(postId)}
            />
            <PostAddComment addComment={addComment} postId={postId} />
          </>
        )}
      </div>
    </PostWrapper>
  );
};

const mapStateToProps = (state) => ({
  loading: state.post.loading,
  post: state.post.currentPost,
  savedPosts: state.post.savedPosts,
  postLiked:
    state.post.currentPost.likes &&
    state.post.currentPost.likes.includes(state.auth.user.id),
  postOwner:
    state.post.currentPost.user &&
    state.post.currentPost.user._id === state.auth.user.id,
});

export default connect(mapStateToProps, {
  getPostById,
  addComment,
  likePost,
  deletePost,
  savePost,
  getSavedPosts,
})(Post);
