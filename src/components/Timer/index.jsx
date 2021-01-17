import React, { useState, useEffect, useCallback } from 'react';

import convertSecondsToTimeString from '../../utils/convertSecondsToTimeString';
import convertTimeStringToSeconds from '../../utils/convertTimeStringToSeconds';
import addNumberToTimeString from '../../utils/addNumberToTimeString';

const Timer = () => {
  const [timer, setTimer] = useState(10);
  const [isActive, setIsActive] = useState(false);
  const [timeoutID, setTimeoutID] = useState(null);
  const [inputNumbers, setInputNumbers] = useState([]);
  const [display, setDisplay] = useState('00:00');

  useEffect(() => {
    setDisplay(convertSecondsToTimeString(timer));

    if (isActive && timer > 0) {
      const timeout = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);

      setTimeoutID(timeout);
    } else {
      setIsActive(false);
    }

  }, [
      timer,
      isActive,
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
    setIsActive(false);
    clearTimeout(timeoutID);
  }, [timeoutID]);

  const handleReset = useCallback(() => {
    handlePause();
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
    <>
      <h1>
        {display}
      </h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleAddToTimer}>0</button>
      <button onClick={handleAddToTimer}>1</button>
      <button onClick={handleAddToTimer}>2</button>
      <button onClick={handleAddToTimer}>3</button>
      <button onClick={handleAddToTimer}>4</button>
      <button onClick={handleAddToTimer}>5</button>
      <button onClick={handleAddToTimer}>6</button>
      <button onClick={handleAddToTimer}>7</button>
      <button onClick={handleAddToTimer}>8</button>
      <button onClick={handleAddToTimer}>9</button>
    </>
  )
};

export default Timer;
