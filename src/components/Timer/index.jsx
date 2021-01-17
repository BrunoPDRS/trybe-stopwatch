import React, { useState, useEffect, useCallback } from 'react';

const Timer = () => {
  const [timer, setTimer] = useState(10);
  const [isActive, setIsActive] = useState(false);
  const [timeoutID, setTimeoutID] = useState(null);

  const hours = Math.floor(timer/3600);
  const minutes = Math.floor(timer/60) - (hours * 60);
  const seconds = timer - (minutes * 60) - (hours * 3600);

  useEffect(() => {
    if (isActive && timer > 0) {
      const timeout = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);

      setTimeoutID(timeout);
    } else {
      setIsActive(false);
    }
  }, [timer, isActive]);

  const handleStart = useCallback(() => {
    setTimer(timer - 1);
    setIsActive(true);
  }, [timer]);

  const handlePause = useCallback(() => {
    setIsActive(false);
    clearTimeout(timeoutID);
  }, [timeoutID]);

  return (
    <>
      <h1>
        <span>{hours.toString().padStart(2, 0)}:</span>
        <span>{minutes.toString().padStart(2, 0)}:</span>
        <span>{seconds.toString().padStart(2, 0)}</span>
      </h1>
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePause}>Pause</button>
    </>
  )
};

export default Timer;
