import React from 'react';

const GithubLoginButton = () => {
  const authState = Math.random().toString(36).slice(2);
  sessionStorage.setItem('authState', authState);

  return (
    <a
      href={`https://github.com/login/oauth/authorize?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&redirect_uri=${window.location.origin}/login&state=${authState}&scope=user:email`}
    >
      <h3>Log in with GitHub</h3>
    </a>
  );
};

export default GithubLoginButton;
