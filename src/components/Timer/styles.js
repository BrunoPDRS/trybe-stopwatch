import styled from 'styled-components';

import panelImg from '../../assets/panel.svg';

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: fit-content;
  justify-content: center;
  padding: 10px;
  width: 86%;
  z-index: 5;
  
  @media screen and (max-width: 768px) {
    flex-wrap: wrap;
  }
`;

export const Panel = styled.div`
  border: 8px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${panelImg});
  background-size: contain;
  background-repeat: no-repeat;
  width: 410px;
  margin: 0 15px;
  min-width: 368px;
  min-height: 417px;

  > div {
    min-height: 353px;
    min-width: 79.8%;
    display: flex;
    flex-direction: column;
    margin: 0 12px;
    justify-content: center;
    align-items: center;
    padding: 4%;

    div {
      display: flex;
    }
  }
`;

export const Screen = styled.div`
  background: black;
  border-radius: 1px;
  box-shadow: 
    0px 0px 0px 4px rgba(57, 57, 57, 1),
    0px 0px 0px 9px rgba(197, 197, 197, 1);
  flex: 1;
  height: 100%;
  margin: 25px 0;
  padding: 5px;
  position: relative;
  width: 100%;

  h1 {
    color: #00c000;
    font-size: 8rem;
    font-weight: 800;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 5;
  }
`;

export const ButtonsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 96%;
  height: 100%;
  padding-bottom: 5px;
  border-radius: 1px;
`;
