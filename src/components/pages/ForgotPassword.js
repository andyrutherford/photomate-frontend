import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { forgotPassword } from '../../utils/password';

import Button from '../../styles/Button';

const ForgotPasswordWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: center;
  margin: 30px auto 0;
  max-width: 935px;
  padding-botto: 44px;
  width: 100%;

  .forgot-password {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    margin-top 12px;
    max-width: 350px;
    width: 100%;
    height: 800px;
  }

  .forgot-password > div {
    background-color: #fff;
    border: 1px solid #d3d3d3;
    border-radius: 1px;
    margin: 0 0 10px;
    padding: 10px 0;
  }

  .logo {
    text-align: center;
    font-size: 3.5rem;
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
    position: relative;
    }

    input { 
    background-color: #fafafa;
    border: 1px solid #d3d3d3;
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

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [message, setMessage] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    // Basic email validation
    if (
      !/^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      return toast.error('Please enter a valid email');
    } else {
      setLoading(true);
      setDisabled(true);

      try {
        await forgotPassword(email);
        setMessage(
          'Please check your email for instructions on how to reset your password.'
        );
      } catch (error) {
        setLoading(false);
        if (error.response.status === 400 || error.response.status === 404)
          toast.error(error.response.data.message, { autoClose: 6000 });
        else {
          toast.error(
            'A problem occurred.  Please try again in a few minutes.'
          );
        }
      }
    }
  };

  return (
    <ForgotPasswordWrapper>
      <div className='forgot-password'>
        <div>
          <h1 className='logo'>Photomate</h1>
          <h2>Enter the email address you used when creating your account.</h2>
          <form>
            <input
              type='text'
              name='email'
              onChange={(e) => setEmail(e.target.value)}
              style={{ textAlign: 'center' }}
              value={email}
              placeholder='name@mail.com'
              disabled={disabled}
            />
            <Button
              className='signup-btn'
              onClick={onSubmit}
              disabled={disabled}
            >
              {message ? 'Email Sent' : loading ? 'Please Wait' : 'Submit'}
            </Button>
          </form>
          {message && <h2 style={{ textAlign: 'center' }}>{message}</h2>}
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
    </ForgotPasswordWrapper>
  );
};

export default ForgotPassword;
