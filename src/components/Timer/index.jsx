import React, { useState, useEffect, useCallback } from 'react';

import convertSecondsToTimeString from '../../utils/convertSecondsToTimeString';
import convertTimeStringToSeconds from '../../utils/convertTimeStringToSeconds';
import addNumberToTimeString from '../../utils/addNumberToTimeString';

import Buttons from '../Buttons';
import Button from '../Button';

import { BsPlayFill, BsPauseFill, BsSquareFill } from 'react-icons/bs'

import { ButtonsContainer, Container, Panel, Screen } from './styles';

const Timer = () => {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isOver, setIsOver] = useState(false);
  const [timeoutID, setTimeoutID] = useState(null);
  const [inputNumbers, setInputNumbers] = useState([]);
  const [display, setDisplay] = useState('00:00');

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const hasTime = display !== '00:00';
  const isBackMsg = display === 'Voltamos!!!';

  useEffect(() => {
    !isOver && setDisplay(convertSecondsToTimeString(timer));

    if (isActive && timer > 0) {
      const timeout = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);

      setTimeoutID(timeout);
    } else if (isActive) {
      setIsActive(false);
      setIsOver(true);
    } else if (isOver) {
      setInputNumbers([]);
      setDisplay('Voltamos!!!');
    }

    isBackMsg && setTimeout(() => alert('O intervalo acabou!'), 200);

  }, [
      timer,
      isActive,
      isOver,
      isBackMsg
    ]
  );

  const handleStart = useCallback(() => {
    const startingTime = convertTimeStringToSeconds(display);
    setTimer(startingTime);

    if (startingTime > 0) {
      setIsActive(true);
    }
  }, [display]);

  const handlePause = useCallback(() => {
    setInputNumbers([]);
    setIsActive(false);
    clearTimeout(timeoutID);
  }, [timeoutID]);

  
  const handleReset = useCallback(() => {
    handlePause();
    setIsOver(false);
    setTimer(0);
    setDisplay('00:00');
    setInputNumbers([]);
  }, [handlePause]);

  const handleAddToTimer = useCallback((event) => {
    const newNumber = event.target.innerText;

    if (newNumber === "0" && !inputNumbers.length) return;

    setDisplay(addNumberToTimeString([...inputNumbers, newNumber]));
    setInputNumbers([...inputNumbers, newNumber]);

  }, [inputNumbers]);

  return (
    <Container>
      <Panel>
        <div>
          <Screen>
            <h1>{display}</h1>
          </Screen>
          <ButtonsContainer>
            <Button
              isDisabled={isActive || (!hasTime && !isActive) || isOver} 
              onClick={handleStart}
              isControl={true}
            >
              <BsPlayFill size={40} />
            </Button>
            <Button
              isDisabled={!isActive}
              onClick={handlePause}
              isControl={true}
            >
              <BsPauseFill size={40} />
            </Button>
            <Button onClick={handleReset} isControl={true}>
              <BsSquareFill />
            </Button>
          </ButtonsContainer>
        </div>
      </Panel>
      <Panel>
        <div>
          <Buttons
            isDisabled={isActive || isOver}
            onClick={handleAddToTimer}
            buttonsContent={numbers}
          />
        </div>
      </Panel>
    </Container>
  )
};

export default Timer;
