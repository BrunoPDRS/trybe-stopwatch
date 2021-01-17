const convertSecondsToTimeString = (timer) => {
  const minutes = Math.floor(timer/60);
  const seconds = timer - (minutes * 60);

  const timerMinutes = minutes.toString().padStart(2, 0);
  const timerSeconds = seconds.toString().padStart(2, 0);

  return `${timerMinutes}:${timerSeconds}`;
}

export default convertSecondsToTimeString;
