import React from 'react';
import styled from 'styled-components';

import searchSVG from '../assets/search.svg';

const SearchWrapper = styled.div`
  label {
    position: relative;
  }

  label:before {
    content: '';
    position: absolute;
    left: 10px;
    top: 0;
    bottom: 0;
    width: 20px;
    background: url(${searchSVG}) center / contain no-repeat;
  }

  input {
    border-radius: 3px;
    border: 1px solid lightgrey;
    padding: 10px 30px;
    background-color: #fafafa;
  }
`;

const Search = () => {
  return (
    <SearchWrapper>
      <label>
        <input type='text' placeholder='Search' />
      </label>
    </SearchWrapper>
  );
};

export default Search;
