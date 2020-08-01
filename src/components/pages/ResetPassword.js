import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

import { EyeIcon } from '../../components/Icons';

import { requestResetPassword, resetPassword } from '../../utils/password';

import Button from '../../styles/Button';
import logo from '../../assets/logo.svg';

const ResetPasswordWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-grow: 1;
  justify-content: center;
  margin: 30px auto 0;
  max-width: 935px;
  padding-botto: 44px;
  width: 100%;

  .reset-password {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    justify-content: center;
    margin-top 12px;
    max-width: 350px;
    width: 100%;
    height: 800px;
  }

  .reset-password > div {
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
    position: relative;
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

const ResetPassword = () => {
  const { token } = useParams();
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: '',
  });
  const [verified, setVerified] = useState(false);
  const [message, setMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const requestResetPasswordHandler = async () => {
      try {
        const user = await requestResetPassword(token);
        console.log(user);
        setVerified(user);
      } catch (error) {
        setVerified(false);
        setMessage(
          'This link is either broken or expired.  Please try again later.'
        );
      }
    };
    requestResetPasswordHandler();
  }, [token]);

  const onChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (!verified) return;

    if (formData.password !== formData.confirmPassword) {
      return toast.error('The passwords do not match.');
    }

    try {
      const res = await resetPassword(token, formData.password);
      setMessage(res);
      setSuccess(true);
    } catch (error) {
      toast.error('A problem occurred.  Please try again in a few minutes');
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <ResetPasswordWrapper>
      <div className='reset-password'>
        <div>
          <img className='logo' src={logo} alt='logo' />
          <h2>Reset your password</h2>

          {verified ? (
            <form>
              <input
                type={showPassword ? 'text' : 'password'}
                name='password'
                onChange={onChange}
                placeholder='New password'
                value={formData.password}
                disabled={success}
              />
              <input
                type={showPassword ? 'text' : 'password'}
                name='confirmPassword'
                onChange={onChange}
                placeholder='Confirm new password'
                value={formData.confirmPassword}
                disabled={success}
              />
              <span className='subtext small' style={{ textAlign: 'center' }}>
                Your password must be at least 6 characters.
              </span>
              <EyeIcon
                style={{ position: 'absolute', top: '31%', right: '15%' }}
                cursor='pointer'
                size='24'
                stroke={showPassword ? '1.5' : '1'}
                onClick={toggleShowPassword}
                display={success && 'none'}
              />
              <Button
                className='submit-btn'
                disabled={
                  formData.password.length < 6 ||
                  formData.confirmPassword.length < 6 ||
                  success
                }
                onClick={onSubmit}
              >
                {success ? 'Password reset' : 'Submit'}
              </Button>
              {message && <h2 style={{ textAlign: 'center' }}>{message}</h2>}
            </form>
          ) : (
            <p>{message}</p>
          )}
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
    </ResetPasswordWrapper>
  );
};

export default ResetPassword;
