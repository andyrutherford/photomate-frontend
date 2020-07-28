import React from 'react';
import styled from 'styled-components';

import { GithubIcon } from '../components/Icons';

const GithubLoginButtonWrapper = styled.div`
  border: 1px solid lightgrey;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  margin: 0 auto 15px auto;
  height: 30px;
  width: 268px;
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
  }
`;

const GithubLoginButton = () => {
  const authState = Math.random().toString(36).slice(2);
  sessionStorage.setItem('authState', authState);

  return (
    <GithubLoginButtonWrapper>
      <a
        className='black'
        href={`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&redirect_uri=${window.location.origin}/login&state=${authState}&scope=user:email`}
      >
        <GithubIcon size={20} />
        <span> Log in with GitHub</span>
      </a>
    </GithubLoginButtonWrapper>
  );
};

export default GithubLoginButton;
