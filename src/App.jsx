import React from 'react';

import GlobalStyle from './styles/global';

import Timer from './components/Timer';
import Title from './components/Title';

const App = () => (
  <>
    <Title>Infinity StopWatch</Title>
    <Timer />
    <GlobalStyle />
  </>
);

export default App;
