import React from 'react';

import { ReactComponent as Logo } from '../../assets/logo-camera.svg';

const Loading = () => (
  <main className='loading-page'>
    <Logo
      style={{
        width: '50px',
        margin: 'auto',
        display: 'block',
        color: 'lightgrey',
      }}
      alt='Loading...'
    />
  </main>
);

export default Loading;
