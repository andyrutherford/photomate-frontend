import React from 'react';
import styled from 'styled-components';

import Feed from '../Feed';
import Suggestions from '../Suggestions';

const DashboardWrapper = styled.div`
  display: flex;
`;

const Dashboard = () => {
  return (
    <DashboardWrapper>
      <Feed />
      <Suggestions />
    </DashboardWrapper>
  );
};

export default Dashboard;
