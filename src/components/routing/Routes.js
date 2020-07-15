import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';

// Components
import Navbar from '../Navbar';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';

const Container = styled.div`
  width: 935px;
  margin: 5.5rem auto;
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

const Routes = () => {
  return (
    <section className='container'>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/:username' component={Profile} />
          <Route exact path='/accounts/edit' component={Settings} />
        </Switch>
      </Container>
    </section>
  );
};

export default Routes;
