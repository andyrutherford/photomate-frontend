import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Link, useHistory } from 'react-router-dom';

import { logoutUser } from '../actions/auth-actions';

import Avatar from '../styles/Avatar';
import { HomeIcon, LogoutIcon } from './Icons';
import NewPostButton from '../components/NewPostButton';
import Search from '../components/Search';

const NavbarWrapper = styled.div`
  background-color: #fff;
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 1px solid #d3d3d3;
  margin-bottom: 1rem;
  z-index: 900;

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 935px;
    padding-bottom: 5px;
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

  .logo {
    font-size: 2.2rem;
  }

  @media screen and (max-width: 1070px) {
    nav {
      width: 90%;
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
        {/* <img className='logo' src={logo} alt='Instagram' /> */}
        <div style={{ paddingTop: '3px', marginBottom: '-8px' }}>
          {' '}
          <Link to='/' className='logo'>
            Photomate
          </Link>
        </div>

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
              <Avatar
                className='avatar'
                src={avatar}
                alt={'avatar'}
                style={{ marginRight: '0' }}
              />
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
