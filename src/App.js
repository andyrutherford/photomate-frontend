import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import { default as GlobalStyle } from './styles/Global';
import Login from './components/Login';
import Signup from './components/Signup';
import Routes from './components/routing/Routes';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route path='/login' exact component={Login} />
        <Route path='/signup' exact component={Signup} />
        <Route component={Routes} />
      </Switch>
    </Router>
  );
};

export default App;
