import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Avatar from '../styles/Avatar';

const SuggestionListItemWrapper = styled.div`
  a {
    margin: auto;
  }

  img {
    display: block;
  }
  .suggestions-profile {
    display: flex;
    justify-content: space-between;
  }

  .suggestions-profile div {
    display: flex;
    justify-content: space-around;
    margin: auto 0;
  }

  .suggestions-profile div div {
    display: block;
  }

  .suggestions-profile div div > :first-child {
    font-weight: bold;
  }
  .suggestions-profile div div > :nth-child(2) {
    color: grey;
  }
`;

const SuggestionListItem = ({ profile }) => {
  return (
    <SuggestionListItemWrapper>
      <div className='suggestions-profile'>
        <div>
          <Link to={`/${profile.username}`}>
            <Avatar src={profile.avatar} alt={profile.username} />
          </Link>
          <div>
            <Link className='black' to={`/${profile.username}`}>
              {profile.username}
            </Link>
            <p>{profile.name}</p>
          </div>
        </div>
        <div>
          <Link to={`/${profile.username}`}>View</Link>
        </div>
      </div>
    </SuggestionListItemWrapper>
  );
};

export default SuggestionListItem;
