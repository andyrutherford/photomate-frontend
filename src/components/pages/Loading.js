import React from 'react';

import logo from '../../assets/logo-camera.svg';

const Loading = ({ message }) => (
  <main
    className='loading-page'
    style={{ display: 'flex', flexDirection: 'column' }}
  >
    <img
      src={logo}
      style={{
        width: '50px',
        margin: '300px auto 20px',
        display: 'block',
      }}
      alt='Loading...'
    />
    <span style={{ margin: 'auto' }}>{message}</span>
  </main>
);

export default Loading;
