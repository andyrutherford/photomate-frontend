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

import { getPostById } from '../../actions/post-actions';

const PostWrapper = styled.div`
  display: flex;

  .post-right {
    border: 1px solid lightgrey;
    border-bottom-right-radius: 3px;
    border-top-right-radius: 3px;
  }
`;

const Post = ({ getPostById, loading, post }) => {
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
          <PostHeader username={post.user.username} avatar={post.user.avatar} />
        )}
        <PostInfo />
        <PostActions />
        <PostAddComment />
      </div>
    </PostWrapper>
  );
};

const mapStateToProps = (state) => ({
  loading: state.post.loading,
  post: state.post.currentPost,
});

export default connect(mapStateToProps, { getPostById })(Post);