import styled, { css } from 'styled-components';

const Button = styled.button`
  background-color: #0095f6;
  border: 1px solid #0095f6;
  padding: 0.4rem 1rem;
  color: #fff;
  border-radius: 4px;
  margin-top: 1rem;
  margin-left: 1rem;
  font-family: 'Fira Sans', sans-serif;
  font-size: 14px;
  font-weight: bold;
  height: 30px;
  line-height: 20px;
  ${(props) =>
    props.secondary &&
    css`
      color: black;
      background-color: transparent;
      border: 1px solid #d3d3d3;
    `}
  ${(props) =>
    props.link &&
    css`
      color: black;
      background-color: transparent;
      border: none;
      margin: 0;
      padding: 0;
    `}
  ${(props) =>
    props.tab &&
    css`
      background-color: transparent;
      padding: 0;
      margin: 0;
      border: none;
      color: black;
    `}
`;

export default Button;
