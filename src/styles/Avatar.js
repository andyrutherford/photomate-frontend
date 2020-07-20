import styled, { css } from 'styled-components';

const Avatar = styled.img`
  width: 28px;
  height: 28px;
  object-fit: cover;
  border-radius: 100px;
  ${(props) =>
    props.md &&
    css`
      width: 42px;
      height: 42px;
    `}
  ${(props) =>
    props.lg &&
    css`
      width: 56px;
      height: 56px;
    `}
  ${(props) =>
    props.xl &&
    css`
      width: 200px;
      height: 200px;
      border-radius: 200px;
    `}
`;

export default Avatar;
