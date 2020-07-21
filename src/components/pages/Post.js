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

import { getPostById, addComment, likePost } from '../../actions/post-actions';

const PostWrapper = styled.div`
  display: flex;

  .post-right {
    background-color: white;
    border: 1px solid lightgrey;
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
  likePost,
  addComment,
  loading,
  post,
}) => {
  const { postId } = useParams();

  useEffect(() => {
    getPostById(postId);
  }, [getPostById, postId]);

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
            />

            <PostInfo
              username={post.user.username}
              avatar={post.user.avatar}
              caption={post.caption}
              comments={post.comments}
            />
            <PostActions
              postId={postId}
              postLiked={postLiked}
              likeCount={post.likeCount}
              createdAt={post.createdAt}
              likePost={likePost}
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
  postLiked:
    state.post.currentPost.likes &&
    state.post.currentPost.likes.includes(state.auth.user.id),
});

export default connect(mapStateToProps, { getPostById, addComment, likePost })(
  Post
);
