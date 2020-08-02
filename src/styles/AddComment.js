import styled from 'styled-components';

const AddComment = styled.div`
  form {
    display: flex;
    position: relative;
  }

  button {
    background: none;
    border: none;
  }

  input {
    border: none;
    border-top: 0.5px solid #d3d3d3;
    font-size: 14px;
    height: 56px;
    padding: 0 16px;
    width: 100%;
  }

  input[type='text'] {
    padding-right: 85px;
  }

  input[type='submit'] {
    background: none;
    border: none;
    color: #0095f6;
    cursor: pointer;
    font-weight: bold;
    margin-left: -50px;
    width: 50px;
    padding: 0;
  }

  .input-actions {
    margin-left: -85px;
    width: 75px;
  }
`;

export default AddComment;
