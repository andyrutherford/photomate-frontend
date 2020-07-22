import styled from 'styled-components';

const AddComment = styled.div`
  input {
    border: none;
    border-top: 0.5px solid lightgrey;
    font-size: 14px;
    height: 56px;
    padding: 0 16px;
    width: 100%;
  }

  input[type='text'] {
    padding-right: 50px;
  }

  input[type='submit'] {
    background: none;
    border: none;
    color: #0095f6;
    cursor: pointer;
    font-weight: bold;
    margin-left: -75px;
    width: 75px;
  }
`;

export default AddComment;
