import React from 'react';

export const HomeIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-home'
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
    <polyline points='5 12 3 12 12 3 21 12 19 12' />
    <path d='M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7' />
    <path d='M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6' />
  </svg>
);

export const InboxIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-send'
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
    <line x1='10' y1='14' x2='21' y2='3' />
    <path d='M21 3L14.5 21a.55 .55 0 0 1 -1 0L10 14L3 10.5a.55 .55 0 0 1 0 -1L21 3' />
  </svg>
);

export const ExploreIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-compass'
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
    <polyline points='8 16 10 10 16 8 14 14 8 16' />
    <circle cx='12' cy='12' r='9' />
  </svg>
);

export const ActivityIcon = ({ light, size = 28 }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-heart'
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

export const CircleIcon = ({ size = 10, strokeWidth = 0.5 }) => (
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

export const ThreeDotsIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-dots'
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

// TODO: MessageIcon is slightly bigger than other icons

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
