import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { logoutUser } from '../actions/auth-actions';

import { HomeIcon, InboxIcon, ExploreIcon, ActivityIcon } from './Icons';
import Search from '../components/Search';
import logo from '../assets/logo.svg';
import avatar from '../assets/avatar.jpg';

const NavbarWrapper = styled.div`
  background-color: white;
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 1px solid lightgrey;
  margin-bottom: 1rem;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 975px;
    padding: 0 20px;
  }

  img {
    width: 103px;
    margin: 10px 0 0;
  }

  ul {
    display: flex;
    position: relative;
    top: 5px;
    right: 20px;
    list-style-type: none;
  }

  li {
    margin-left: 1rem;
  }

  .avatar {
    height: 28px;
    width: 28px;
    border-radius: 100px;
    object-fit: cover;
    margin: 0;
  }

  @media screen and (max-width: 1070px) {
    nav {
      width: 90%;
    }
  }
  @media screen and (max-width: 670px) {
    input {
      display: none;
    }
  }
`;

const Navbar = ({ logoutUser }) => {
  return (
    <NavbarWrapper>
      <nav>
        <Link to='/'>
          <img src={logo} alt='Instagram' />
        </Link>
        <Search />
        <ul>
          <li>
            <HomeIcon />
          </li>
          <li>
            <InboxIcon />
          </li>
          <li>
            <ExploreIcon />
          </li>
          <li>
            <ActivityIcon />
          </li>
          <li>
            <Link to='/profile'>
              <img className='avatar' src={avatar} alt={avatar} />
            </Link>
          </li>
          <li>
            <button onClick={logoutUser}>Logout</button>
          </li>
        </ul>
      </nav>
    </NavbarWrapper>
  );
};

export default connect(null, { logoutUser })(Navbar);
