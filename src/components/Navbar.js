import React from 'react';
import styled from 'styled-components';

import {
  HomeIcon,
  InboxIcon,
  ExploreIcon,
  ActivityIcon,
  UserIcon,
} from './Icons';
import Search from '../components/Search';
import logo from '../assets/logo.svg';

const NavbarWrapper = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 1px solid grey;
  margin-bottom: 1rem;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
  }

  img {
    height: 35px;
    width: 103px;
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
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <nav>
        <img src={logo} alt='Instagram' />
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
            <UserIcon />
          </li>
        </ul>
      </nav>
    </NavbarWrapper>
  );
};

export default Navbar;
