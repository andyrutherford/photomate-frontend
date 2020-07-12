import React from 'react';
import styled from 'styled-components';

import { CircleIcon } from './Icons';
import SuggestionList from './SuggestionList';

const SuggestionsWrapper = styled.div`
  border: 1px solid lightgrey;
  position: fixed;
  left: 65%;
  width: 280px;
  font-size: 14px;

  .suggestions-my-profile {
    display: flex;
    height: 62px;
  }

  .suggestions-my-profile div {
    margin: auto 0;
  }

  .suggestions-my-profile div > :first-child {
    font-weight: bold;
  }

  .suggestions-my-profile div > :nth-child(2) {
    color: grey;
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
        <CircleIcon />
        <div>
          <p>@user</p>
          <p>username</p>
        </div>
      </div>
      <SuggestionList />
    </SuggestionsWrapper>
  );
};

export default Suggestions;
