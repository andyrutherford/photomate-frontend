import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { signupUser } from '../actions/auth-actions';

import Button from '../styles/Button';
import logo from '../assets/logo.svg';

const SignupWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: center;
  margin: 30px auto 0;
  max-width: 935px;
  padding-botto: 44px;
  width: 100%;

  .signup {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    margin-top 12px;
    max-width: 350px;
    width: 100%;
    height: 800px;
  }

  .signup > div {
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

    h2 {
        color: #8e8e8e;
        font-size: 17px;
        font-weight: 500;
        line-height: 20px;
        margin: 0 40px 20px;
        text-align: center;
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

const Signup = ({ isAuthenticated, signupUser }) => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    username: '',
    password: '',
  });
  const [formValid, setFormValid] = useState(false);

  // Form validation
  useEffect(() => {
    setFormValid(
      !!formData.email &&
        !!formData.name &&
        !!formData.username &&
        formData.password.length > 5
    );
  }, [formData]);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (formValid) {
      return signupUser(formData);
    }
  };

  const testAcct = (e) => {
    e.preventDefault();
    return setFormData({
      name: Math.floor(Math.random() * 1000000) + 1,
      username: Math.floor(Math.random() * 1000000) + 1,
      email: Math.floor(Math.random() * 1000000) + 1 + '@gmail.com',
      password: '123456',
    });
  };

  if (isAuthenticated) {
    return <Redirect to='/' />;
  }

  return (
    <SignupWrapper>
      <div className='signup'>
        <div>
          <img className='logo' src={logo} alt='logo' />
          <h2>Sign up to see photos and videos from your friends.</h2>
          <div style={{ display: 'block', textAlign: 'center' }}>
            Create test account:{' '}
            <button onClick={testAcct} style={{ width: '50px' }}>
              fill
            </button>
          </div>
          <form>
            <input
              type='text'
              name='email'
              onChange={onChange}
              placeholder='Email'
              value={formData.email}
            />
            <input
              type='text'
              name='name'
              onChange={onChange}
              placeholder='Full Name'
              value={formData.name}
            />
            <input
              type='text'
              name='username'
              onChange={onChange}
              placeholder='Username'
              value={formData.username}
            />
            <input
              type='password'
              name='password'
              onChange={onChange}
              placeholder='Password'
              value={formData.password}
            />
            <Button
              className='signup-btn'
              disabled={!formValid}
              onClick={onSubmit}
            >
              Sign up
            </Button>
          </form>
        </div>
        <div>
          <p>
            Have an account?{' '}
            <Link className='login' to='/login'>
              Log in
            </Link>
          </p>
        </div>
      </div>
    </SignupWrapper>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signupUser })(Signup);
