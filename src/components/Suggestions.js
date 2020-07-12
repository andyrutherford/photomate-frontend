import React from 'react';
import styled from 'styled-components';

import { CircleIcon } from './Icons';
import SuggestionList from './SuggestionList';

const SuggestionsWrapper = styled.div`
  border: 1px solid lightgrey;
  position: fixed;
  left: 65%;
  width: 280px;

  .suggestions-profile {
    border: 1px dashed grey;
    display: flex;
    height: 62px;
  }

  .suggestions-profile div > :first-child {
    font-weight: bold;
  }

  .suggestions-profile div > :nth-child(2) {
    color: grey;
  }

  @media screen and (max-width: 1095px) {
    left: 67%;
  }
  @media screen and (max-width: 1040px) {
    display: none;
  }
`;

const Suggestions = () => {
  return (
    <SuggestionsWrapper>
      <div className='suggestions-profile'>
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
