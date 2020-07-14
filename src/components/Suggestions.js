import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import avatar from '../assets/avatar.jpg';

import SuggestionList from './SuggestionList';

const SuggestionsWrapper = styled.div`
  position: fixed;
  left: 65%;
  width: 280px;
  font-size: 14px;
  margin-left: 30px;

  .suggestions-my-profile {
    display: flex;
    height: 62px;
  }

  .suggestions-my-profile div {
    margin: auto 0;
  }

  .avatar {
    height: 56px;
    width: 56px;
    border-radius: 100px;
    object-fit: cover;
    margin-right: 10px;
  }

  .suggestions-my-profile div > :first-child {
    font-weight: bold;
  }

  .suggestions-my-profile div > :nth-child(2) {
    color: grey;
  }

  .suggestions-my-profile div a {
    color: black;
  }

  footer {
    margin-top: 25px;
    font-size: 12px;
    color: lightgrey;
  }

  footer ul li {
    display: inline;
  }

  footer span {
    margin-top: 10px;
  }

  @media screen and (max-width: 984px) {
    left: 67%;
    display: none;
  }
`;

const Suggestions = () => {
  return (
    <SuggestionsWrapper>
      <div className='suggestions-my-profile'>
        <Link to='/user'>
          <img className='avatar' src={avatar} alt='avatar' />
        </Link>
        <div>
          <Link to='/user'>cosmo</Link>
          <p>Cosmo Kramer</p>
        </div>
      </div>
      <SuggestionList />

      <footer className='footer'>
        <ul>
          <li>About</li> - <li>Help</li> - <li>Press</li> - <li>API</li> -
          <li>Jobs</li> - <li>Privacy</li> - <li>Terms </li> -{' '}
          <li>Locations</li> - <li>Top Accounts</li> - <li>Hashtags</li> -{' '}
          <li>Language</li>
        </ul>
        <span>© 2020 INSTAGRAM FROM FACEBOOK</span>
      </footer>
    </SuggestionsWrapper>
  );
};

export default Suggestions;
