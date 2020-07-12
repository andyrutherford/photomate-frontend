import React from 'react';
import styled from 'styled-components';

const SuggestionsWrapper = styled.div`
  border: 1px solid lightgrey;

  position: fixed;
  left: 65%;
  width: 280px;

  @media screen and (max-width: 1095px) {
    left: 67%;
  }
  @media screen and (max-width: 1040px) {
    display: none;
  }
`;

const Suggestions = () => {
  return <SuggestionsWrapper>suggestions</SuggestionsWrapper>;
};

export default Suggestions;
