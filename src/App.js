import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { default as GlobalStyle } from './styles/Global';
import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/pages/ForgotPassword';

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
        <ToastContainer position='bottom-right' autoClose={3000} />

        <Switch>
          <Route path='/login' exact component={Login} />
          <Route path='/signup' exact component={Signup} />
          <Route exact path='/forgot-password' component={ForgotPassword} />
          <Route component={Routes} />
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
