import { createGlobalStyle } from 'styled-components';

import backgroundImg from '../assets/space-background.svg';

export default createGlobalStyle`
  *, body {
    padding: 0;
    margin: 0;
    outline: 0;
    box-sizing: border-box;
    font-size: 62.5%;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }

  body {
    overflow-x: hidden;
    max-width: 100vw;
    height: 100%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    user-select: none;
    background-image: url(${backgroundImg});
    background-size: cover;
    background-repeat: no-repeat;
  }

  main {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
  }

  h1 {
    text-align: center;
  }
`;