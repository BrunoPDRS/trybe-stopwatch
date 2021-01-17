import React from 'react';

import Button from '../Button';

import { Container } from './styles';

const Buttons = (props) => {
  const { buttonsContent } = props;
  const { onClick, isDisabled }= props;
  return (
    <Container>
      {buttonsContent.map(button => 
        <Button 
          key={button}
          isDisabled={isDisabled}
          onClick={onClick}>
            {button}
        </Button>
      )}
    </Container>
  );
};

export default Buttons;