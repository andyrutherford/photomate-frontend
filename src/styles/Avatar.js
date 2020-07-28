import styled, { css } from 'styled-components';

const Avatar = styled.img`
  width: 28px;
  height: 28px;
  object-fit: cover;
  border-radius: 100px;
  margin-right: 1rem;
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
      width: 150px;
      height: 150px;
      border-radius: 150px;
    `}
`;

export default Avatar;
