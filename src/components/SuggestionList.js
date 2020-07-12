import React from 'react';
import styled from 'styled-components';

import SuggestionListItem from './SuggestionListItem';

const SuggestionListWrapper = styled.div`
  .suggestion-list-header {
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
  }
  .suggestion-list-header span {
    color: grey;
    font-weight: bold;
  }
`;

const SuggestionList = () => {
  return (
    <SuggestionListWrapper>
      <div className='suggestion-list-header'>
        <span>Suggestions for you</span>
        <div>See All</div>
      </div>
      <div className='suggestion-list-body'>
        <SuggestionListItem />
        <SuggestionListItem />
        <SuggestionListItem />
        <SuggestionListItem />
      </div>
    </SuggestionListWrapper>
  );
};

export default SuggestionList;
