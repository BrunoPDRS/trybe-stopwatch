import styled, { css } from 'styled-components';

export const ButtonContainer = styled.button`
  background: #686868;
  border: inset 4px #505050;
  border-radius: 4px;
  box-shadow: 0 0 0 4px #0a0a0a;
  color: #FFF;
  cursor: pointer;
  font-size: 4rem;
  font-weight: bold;
  height: 31.3%;
  margin: 6px;
  transition: 0.1s;
  width: 25%;

  ${(props) => {
    ["7", "9", "0"].includes(props.children.innerText) && css`
      box-shadow: 0px 0px 0px 4px rgb(10,10,10), 2px 22px 0px -9px#575757, 1px 18px 0px 2px #6a6a6a;
    `}
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:active {
    transform: scale(0.8);
  }
`;
