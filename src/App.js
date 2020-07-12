import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Routes from './components/routing/Routes';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Routes} />
      </Switch>
    </Router>
  );
};

export default App;
