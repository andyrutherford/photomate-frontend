import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

// Components
import PrivateRoute from './PrivateRoute';
import Navbar from '../Navbar';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';
import Post from '../pages/Post';
import Loading from '../pages/Loading';
import ConfirmVerification from '../pages/ConfirmVerification';
import NotFound from '../pages/NotFound';

const ContainerWrapper = styled.div`
  width: 935px;
  margin: 5rem auto 0;
  @media screen and (max-width: 930px) {
    width: 90%;
  }
  @media screen and (max-width: 800px) {
    width: 95%;
  }
  @media screen and (max-width: 620px) {
    width: 100%;
  }
  @media screen and (max-width: 530px) {
    font-size: 0.9rem;
  }
`;

const Routes = ({ loading }) => {
  if (loading) return <Loading />;

  return (
    <section>
      <Navbar />

      <ContainerWrapper>
        <Switch>
          <PrivateRoute exact path='/' component={Dashboard} />{' '}
          <PrivateRoute
            exact
            path='/verify/:token'
            component={ConfirmVerification}
          />
          <PrivateRoute exact path='/:username' component={Profile} />
          <PrivateRoute exact path='/accounts/edit' component={Settings} />
          <PrivateRoute exact path='/p/:postId' component={Post} />
          <Route component={NotFound} />
        </Switch>
      </ContainerWrapper>
    </section>
  );
};

const mapStateToProps = (state) => ({
  loading: state.auth.loading,
});

export default connect(mapStateToProps)(Routes);
