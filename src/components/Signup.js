import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import iphone from '../assets/iphone.png';
import logo from '../assets/logo.svg';
import { findByLabelText } from '@testing-library/react';

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

    .signup-btn {
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

const Signup = () => {
  return (
    <SignupWrapper>
      <div className='signup'>
        <div>
          <img className='logo' src={logo} />
          <h2>Sign up to see photos and videos from your friends.</h2>
          <form>
            <input type='text' placeholder='Email' val='email' />
            <input type='text' placeholder='Full Name' val='name' />
            <input type='text' placeholder='Username' val='username' />
            <input type='password' placeholder='Password' val='password' />
            <button className='signup-btn'>Sign up</button>
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

export default Signup;
