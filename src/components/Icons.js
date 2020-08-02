import React from 'react';

export const HomeIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-home'
    width='30'
    height='30'
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='#000000'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <polyline points='5 12 3 12 12 3 21 12 19 12' />
    <path d='M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7' />
    <path d='M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6' />
  </svg>
);

export const HeartIcon = ({ light, size = 28, onClick }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon pointer icon-tabler icon-tabler-heart'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke={light ? '#ffffff' : '#2c3e50'}
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
    onClick={onClick}
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <path d='M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7' />
  </svg>
);

export const FilledHeartIcon = ({ light, size = 28, onClick }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon pointer icon-tabler icon-tabler-heart'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    strokeWidth='3'
    stroke={light ? '#ffffff' : '#ed4956'}
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
    onClick={onClick}
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <path d='M12 20l-7 -7a4 4 0 0 1 6.5 -6a.9 .9 0 0 0 1 0a4 4 0 0 1 6.5 6l-7 7' />
  </svg>
);

export const UserIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-user'
    width='28'
    height='28'
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='#2c3e50'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <circle cx='12' cy='7' r='4' />
    <path d='M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2' />
  </svg>
);

export const CircleIcon = ({ size = 72, strokeWidth = 0.5 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-circle'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    strokeWidth={strokeWidth}
    stroke='#2c3e50'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <circle cx='12' cy='12' r='9' />
  </svg>
);

export const SmallCircleIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-circle'
    width='40'
    height='40'
    viewBox='0 0 24 24'
    strokeWidth='0.5'
    stroke='#2c3e50'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <circle cx='12' cy='12' r='9' />
  </svg>
);

export const ThreeDotsIcon = (props) => (
  <svg
    {...props}
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-dots pointer'
    width='25'
    height='25'
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='#2c3e50'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <circle cx='5' cy='12' r='1' />
    <circle cx='12' cy='12' r='1' />
    <circle cx='19' cy='12' r='1' />
  </svg>
);

export const MessageIcon = ({ light, size = 28 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-message-circle'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke={light ? '#ffffff' : '#2c3e50'}
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <path d='M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1' />
    <line x1='12' y1='12' x2='12' y2='12.01' />
    <line x1='8' y1='12' x2='8' y2='12.01' />
    <line x1='16' y1='12' x2='16' y2='12.01' />
  </svg>
);

export const BookmarkIcon = ({ size = 28 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-bookmark'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='#2c3e50'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <path d='M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2' />
  </svg>
);

export const FilledBookmarkIcon = ({ size = 28 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-bookmark'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    strokeWidth='3'
    stroke='#0095f6'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <path d='M9 4h6a2 2 0 0 1 2 2v14l-5-3l-5 3v-14a2 2 0 0 1 2 -2' />
  </svg>
);

export const SearchIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-search'
    width='28'
    height='28'
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='#2c3e50'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <circle cx='10' cy='10' r='7' />
    <line x1='21' y1='21' x2='15' y2='15' />
  </svg>
);

export const GearIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-settings'
    width='32'
    height='32'
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='#2c3e50'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <path d='M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z' />
    <circle cx='12' cy='12' r='3' />
  </svg>
);

export const GridIcon = ({ size = 32 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-grid'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='#2c3e50'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <rect x='4' y='4' width='6' height='6' rx='1' />
    <rect x='14' y='4' width='6' height='6' rx='1' />
    <rect x='4' y='14' width='6' height='6' rx='1' />
    <rect x='14' y='14' width='6' height='6' rx='1' />
  </svg>
);

export const CameraIcon = ({ size = 30 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-camera'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='#000000'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <path d='M5 7h1a2 2 0 0 0 2 -2a1 1 0 0 1 1 -1h6a1 1 0 0 1 1 1a2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-9a2 2 0 0 1 2 -2' />
    <circle cx='12' cy='13' r='3' />
  </svg>
);

export const CloseIcon = ({ modal, size = 30 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-x'
    width={modal ? '22' : size}
    height={modal ? '22' : size}
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <line x1='18' y1='6' x2='6' y2='18' />
    <line x1='6' y1='6' x2='18' y2='18' />
  </svg>
);

export const UserCheckIcon = ({ size = 28 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-user-check'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <circle cx='9' cy='7' r='4' />
    <path d='M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2' />
    <path d='M16 11l2 2l4 -4' />
  </svg>
);

export const UserCancelIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-user-x'
    width='44'
    height='44'
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='currentColor'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <circle cx='9' cy='7' r='4' />
    <path d='M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2' />
    <path d='M17 9l4 4m0 -4l-4 4' />
  </svg>
);

export const GithubIcon = (props) => (
  <svg
    {...props}
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-brand-github'
    width={props.size}
    height={props.size}
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='#000000'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <path d='M9 19c-4.286 1.35-4.286-2.55-6-3m12 5v-3.5c0-1 .099-1.405-.5-2 2.791-.3 5.5-1.366 5.5-6.04a4.567 4.567 0 0 0 -1.333 -3.21 4.192 4.192 0 00-.08-3.227s-1.05-.3-3.476 1.267a12.334 12.334 0 0 0 -6.222 0C6.462 2.723 5.413 3.023 5.413 3.023a4.192 4.192 0 0 0 -.08 3.227A4.566 4.566 0 004 9.486c0 4.64 2.709 5.68 5.5 6.014-.591.589-.56 1.183-.5 2V21' />
  </svg>
);

export const EyeIcon = (props) => (
  <svg
    {...props}
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-eye'
    width={props.size}
    height={props.size}
    viewBox='0 0 24 24'
    strokeWidth={props.stroke}
    stroke='#000000'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <circle cx='12' cy='12' r='2' />
    <path d='M2 12l1.5 2a11 11 0 0 0 17 0l1.5 -2' />
    <path d='M2 12l1.5 -2a11 11 0 0 1 17 0l1.5 2' />
  </svg>
);

export const LogoutIcon = ({ size = 30, onClick }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-logout'
    width={size}
    height={size}
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='#000000'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
    onClick={onClick}
    cursor='pointer'
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <path d='M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2' />
    <path d='M7 12h14l-3 -3m0 6l3 -3' />
  </svg>
);
