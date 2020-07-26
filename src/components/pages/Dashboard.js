import React, { useEffect } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { getFeed, getSavedPosts } from '../../actions/post-actions';

import Feed from '../Feed';
import Suggestions from '../Suggestions';

const DashboardWrapper = styled.div`
  display: flex;
`;

const Dashboard = ({ getProfile, getFeed, getSavedPosts }) => {
  useEffect(() => {
    getSavedPosts();
    getFeed();
  }, [getFeed, getSavedPosts]);

  return (
    <DashboardWrapper>
      <Feed />
      <Suggestions />
    </DashboardWrapper>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
  feed: state.post.feed,
});

export default connect(mapStateToProps, { getFeed, getSavedPosts })(Dashboard);
