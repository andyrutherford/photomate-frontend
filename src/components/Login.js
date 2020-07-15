import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { loginUser } from '../actions/auth-actions';

import api from '../utils/api';

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
  border: 1px solid transparent;
  border-radius: 4px;
  width: 268px;
  margin: auto auto 20px;
  background-color: #0095f6;
  color: white;
  line-height: 24px;
  font-size: 14px;
  font-weight: bold;
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

const Login = ({ loginUser }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const [formValid, setFormValid] = useState(false);

  // Form validation
  useEffect(() => {
    setFormValid(!!formData.username && formData.password.length > 5);
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
      loginUser({ userID: formData.username, password: formData.password });
      // try {
      //   const res = await axios.post('/api/v1/auth/login', {
      //     userID: formData.username,
      //     password: formData.password,
      //   });
      //   alert(`${res.data.username} has been successfully logged in.`);
      // } catch (error) {
      //   console.log(error.response);
      //   alert(error.response.data.message);
      // }
    }
  };

  const testAcct = (e) => {
    e.preventDefault();
    setFormData({
      username: 'zucc',
      password: '123456',
    });
    return onSubmit(e);
  };

  return (
    <LoginWrapper>
      <div className='login-left'>
        <img src={iphone} alt='' />
      </div>
      <div className='login-right'>
        <div>
          <img className='logo' src={logo} />
          <div style={{ display: 'block', textAlign: 'center' }}>
            Test account:{' '}
            <button onClick={testAcct} style={{ width: '50px' }}>
              fill
            </button>
          </div>
          <form>
            <input
              onChange={onChange}
              name='username'
              type='text'
              placeholder='Username or email'
              value={formData.username}
            />
            <input
              onChange={onChange}
              name='password'
              type='password'
              placeholder='Password'
              value={formData.password}
            />
            <button
              className='login-btn'
              disabled={!formValid}
              onClick={onSubmit}
            >
              Log In
            </button>
          </form>
          <div className='separator'>
            <div className='separator-line'></div>
            <div className='separator-or'>OR</div>
            <div className='separator-line'></div>
          </div>
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
        </div>
      </div>
    </LoginWrapper>
  );
};

export default connect(null, { loginUser })(Login);
