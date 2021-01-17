const convertSecondsToTimeString = (timer) => {
  const hours = Math.floor(timer/3600);
  const minutes = Math.floor(timer/60) - (hours * 60);
  const seconds = timer - (minutes * 60) - (hours * 3600);

  const timerHours = hours.toString().padStart(2, 0);
  const timerMinutes = minutes.toString().padStart(2, 0);
  const timerSeconds = seconds.toString().padStart(2, 0);

  return `${timerHours}:${timerMinutes}:${timerSeconds}`;
}

export default convertSecondsToTimeString;
