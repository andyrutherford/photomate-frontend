import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import { default as GlobalStyle } from './styles/Global';
import Routes from './components/routing/Routes';

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route component={Routes} />
      </Switch>
    </Router>
  );
};

export default App;
