import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

import { default as GlobalStyle } from './styles/Global';
import Login from './components/Login';
import Signup from './components/Signup';
import Routes from './components/routing/Routes';

import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth-actions';

const App = () => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadUser());
  });

  return (
    <Provider store={store}>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route path='/login' exact component={Login} />
          <Route path='/signup' exact component={Signup} />
          <Route component={Routes} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
