import Bar from './Bar';
import { Container } from 'semantic-ui-react';
import Routes from './Routes';
import Title from './Title';
import React from 'react';

const App = () => (
  <Container>
    <Title />
    <Bar />
    <Routes/>
  </Container>
);

export default App;
