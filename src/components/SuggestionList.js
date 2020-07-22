import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import SuggestionListItem from './SuggestionListItem';

import { getSuggestedUsers } from '../actions/user-actions';

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

const SuggestionList = ({ getSuggestedUsers, suggested }) => {
  useEffect(() => {
    getSuggestedUsers();
  }, [getSuggestedUsers]);
  return (
    <SuggestionListWrapper>
      <div className='suggestion-list-header'>
        <span>Suggestions for you</span>
        <div>See All</div>
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

export default connect(mapStateToProps, { getSuggestedUsers })(SuggestionList);
