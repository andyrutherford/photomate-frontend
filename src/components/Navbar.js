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
    margin: 10px 0;
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
