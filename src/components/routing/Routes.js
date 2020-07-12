import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from '../Navbar';
import Dashboard from '../pages/Dashboard';

const Routes = () => {
  return (
    <section className='container'>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Dashboard} />
      </Switch>
    </section>
  );
};

export default Routes;
