import React, { useEffect } from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { getProfile } from '../../actions/user-actions';

import Feed from '../Feed';
import Suggestions from '../Suggestions';

const DashboardWrapper = styled.div`
  display: flex;
`;

const Dashboard = ({ getProfile, user }) => {
  useEffect(() => {
    getProfile();
  }, [getProfile]);

  return (
    <DashboardWrapper>
      <Feed />
      <Suggestions />
    </DashboardWrapper>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

export default connect(mapStateToProps, { getProfile })(Dashboard);
