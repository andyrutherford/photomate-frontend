import React from 'react';
import styled from 'styled-components';

const SearchWrapper = styled.input`
  border: 1px solid lightgray;
  border-radius: 3px;
  font-size: 14px;
  height: 28px;
  text-align: center;
  width: 215px;
`;

const Search = () => {
  return <SearchWrapper placeholder='Search' />;
};

export default Search;
