import { Header } from 'semantic-ui-react';
import React from 'react';

const Title = () => (
  <Header as="h1" content="CATS FACTS" style={style.h1} />
);

const style = {
  h1: {
    padding: '1em 0em 0.5em',
    fontFamily: 'Impact, Charcoal, sans-serif',
    fontSize: '4em',
    color: '#000066'
  }
};

export default Title;
