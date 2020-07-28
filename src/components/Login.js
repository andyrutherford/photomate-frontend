import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, Redirect, useLocation } from 'react-router-dom';

import { connect } from 'react-redux';
import { loginUser, githubAuth } from '../actions/auth-actions';

import Loading from '../components/pages/Loading';
import GithubLoginButton from './GithubLoginButton';
import { GithubIcon } from '../components/Icons';
import Button from '../styles/Button';
import iphone from '../assets/iphone.png';
import logo from '../assets/logo.svg';

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: center;
  margin: 30px auto 0;
  max-width: 935px;
  padding-botto: 44px;
  width: 100%;

  .login-left {
    margin: auto 10px;
  }

  .login-left img {
    display: flex;
    margin: auto;
    height: 600px;
  }

  .login-right {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    margin-top 12px;
    max-width: 350px;
    width: 100%;
    height: 800px;
  }

  .login-right > div {
    background-color: white;
    border: 1px solid lightgrey;
    border-radius: 1px;
    margin: 0 0 10px;
    padding: 10px 0;
  }

  .logo {
    display: block;
    height: 65px;
    width: 180px;
    margin: 18px auto 12px;  
}

form {
  display: flex;
  flex-direction: column;
}

input { 
  background-color: #fafafa;
  border: 1px solid lightgrey;
  border-radius: 3px;
  font-size: 12px;
  margin: 0 auto 10px;;
  height: 38px;
  width: 268px;
  padding: 5px;
}

button {
  width: 268px;
  margin: auto auto 20px;
  }

.separator {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0px auto 20px;
    width: 256px;
  }

.separator-line {
    height: 1px;
    width: 100%;
    position: relative;
    background-color: grey;
    margin: auto;
  }

  .separator-or {
    color: grey;
    margin: 0 15px;
  }

  .forgot-password {
    display: block;
    color: #00376b;
    font-size: 12px;
    text-align: center;
  }

  p {
    margin: 15px;
    font-weight: 300;
    text-align: center;
  }

  .signup {
    font-weight: 500;
  }

  @media (max-width: 860px) {
    .login-left {
      display: none;
    }
  }
`;

const Login = ({ isAuthenticated, loginUser, githubAuth }) => {
  const [formData, setFormData] = useState({
    userID: '',
    password: '',
  });
  const [formValid, setFormValid] = useState(false);
  const [authLoading, setAuthLoading] = useState(false);
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const code = params.get('code');
  const authState = params.get('state');
  useEffect(() => {
    if (code) {
      setAuthLoading(true);
      if (!authState === sessionStorage.getItem('authState')) {
        return console.warn('Auth state does not match.');
      }
      githubAuth(code);
    }
  }, [authState, code, githubAuth]);

  // Form validation
  useEffect(() => {
    setFormValid(!!formData.userID && formData.password.length > 5);
  }, [formData]);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (formValid) {
      return loginUser(formData);
    }
  };

  const testAcct = (e) => {
    e.preventDefault();
    return setFormData({
      userID: 'zucc',
      password: '123456',
    });
  };

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }
  if (authLoading) return <Loading message='Authenticating with Github...' />;
  return (
    <LoginWrapper>
      <div className='login-left'>
        <img src={iphone} alt='iphone' />
      </div>
      <div className='login-right'>
        <div>
          <img className='logo' src={logo} alt='logo' />
          <div style={{ display: 'block', textAlign: 'center' }}>
            Test account:{' '}
            <button onClick={testAcct} style={{ width: '50px' }}>
              fill
            </button>
          </div>
          <form>
            <input
              onChange={onChange}
              name='userID'
              type='text'
              placeholder='Username or email'
              value={formData.userID}
            />
            <input
              onChange={onChange}
              name='password'
              type='password'
              placeholder='Password'
              value={formData.password}
            />
            <Button
              className='login-btn'
              disabled={!formValid}
              onClick={onSubmit}
            >
              Log In
            </Button>
          </form>
          <div className='separator'>
            <div className='separator-line'></div>
            <div className='separator-or'>OR</div>
            <div className='separator-line'></div>
          </div>
          <GithubLoginButton />
          <Link className='forgot-password' to='/forgot-password'>
            Forgot password?
          </Link>
        </div>
        <div>
          <p>
            Don't have an account?{' '}
            <Link className='signup' to='/signup'>
              Sign up
            </Link>
          </p>
          <a
            href='https://github.com/andyrutherford/instaclone-frontend'
            target='_blank'
            rel='noopener noreferrer'
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '35px',
              margin: '20px auto 10px auto',
            }}
          >
            <GithubIcon size={20} style={{ marginBottom: '4px' }} />
            <span>View on Github</span>
          </a>
        </div>
      </div>
    </LoginWrapper>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { loginUser, githubAuth })(Login);
