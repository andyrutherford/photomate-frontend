import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

import { logoutUser } from '../actions/auth-actions';

import Avatar from '../styles/Avatar';
import { HomeIcon, LogoutIcon } from './Icons';
import NewPostButton from '../components/NewPostButton';
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

  .logo {
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
    margin-left: 1.5rem;
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

const Navbar = ({ username, avatar, logoutUser }) => {
  const history = useHistory();

  const logoutHandler = () => {
    logoutUser();
    history.push('/login');
  };
  return (
    <NavbarWrapper>
      <nav>
        <Link to='/'>
          <img className='logo' src={logo} alt='Instagram' />
        </Link>
        <Search />

        <ul>
          <li>
            <Link to={'/'}>
              <HomeIcon />
            </Link>
          </li>
          <li>
            <NewPostButton />
          </li>
          <li>
            <LogoutIcon onClick={logoutHandler} />
          </li>
          <li>
            <Link to={`/${username}`}>
              <Avatar className='avatar' src={avatar} alt={'avatar'} />
            </Link>
          </li>
        </ul>
      </nav>
    </NavbarWrapper>
  );
};

const mapStateToProps = (state) => ({
  username: state.auth.user.username,
  avatar: state.auth.user.avatar,
});

export default connect(mapStateToProps, { logoutUser })(Navbar);
