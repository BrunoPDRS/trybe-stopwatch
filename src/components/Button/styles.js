import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
  background: #686868;
  border: inset 4px #505050;
  border-radius: 4px;
  box-shadow: 0 0 0 4px #0a0a0a, 4px 4px 16px black;
  color: #FAFAFA;
  cursor: pointer;
  font-size: 4rem;
  font-weight: bold;
  height: 31.3%;
  margin: 6px;
  text-align: center;
  transition: 0.1s;
  width: 25%;

  ${(props) => typeof props.children !== 'number' && css`
    align-items: center;
    display: flex;
    height: 60px;
    justify-content: center;
    width: 60px;
  `}
  
  svg {
    margin: auto;
  }

  &:active {
    transform: scale(0.95);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }
`;
