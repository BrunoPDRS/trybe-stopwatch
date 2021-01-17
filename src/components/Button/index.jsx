import React from 'react';

import { ButtonContainer } from './styles';

const Button = (props) => (
  <ButtonContainer disabled={props.isDisabled} onClick={props.onClick}>{props.children}</ButtonContainer>
);

export default Button;
