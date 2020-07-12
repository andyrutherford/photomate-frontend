import React from 'react';
import styled from 'styled-components';

import { SmallCircleIcon } from './Icons';

const SuggestionListItemWrapper = styled.div`
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

const SuggestionListItem = () => {
  return (
    <SuggestionListItemWrapper>
      <div className='suggestions-profile'>
        <div>
          <SmallCircleIcon />
          <div>
            <p>@cosmo</p>
            <p>Cosmo Kramer</p>
          </div>
        </div>
        <div>
          <a href='#!'>Follow</a>
        </div>
      </div>
    </SuggestionListItemWrapper>
  );
};

export default SuggestionListItem;
