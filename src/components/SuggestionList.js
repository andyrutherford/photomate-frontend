import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import SuggestionListItem from './SuggestionListItem';

const SuggestionListWrapper = styled.div`
  .suggestion-list-header {
    margin-top: 12px;
  }
  .suggestion-list-header span {
    color: grey;
    font-weight: bold;
  }
`;

const SuggestionList = ({ suggested }) => {
  return (
    <SuggestionListWrapper>
      <div className='suggestion-list-header'>
        <span>Suggestions for you</span>
      </div>
      <div className='suggestion-list-body'>
        {suggested.length > 0 &&
          suggested.map((profile, index) => (
            <SuggestionListItem key={index} profile={profile} />
          ))}
      </div>
    </SuggestionListWrapper>
  );
};

const mapStateToProps = (state) => ({
  suggested: state.user.suggestedUsers,
});

export default connect(mapStateToProps)(SuggestionList);
