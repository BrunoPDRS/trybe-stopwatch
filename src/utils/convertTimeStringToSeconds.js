const convertTimeStringToSeconds = (display) => {
  const [minutes, seconds] = display.split(':');
  const minutesToSeconds = parseInt(minutes) * 60;
  
  const timeInSeconds = minutesToSeconds + parseInt(seconds);

  return timeInSeconds;
}

export default convertTimeStringToSeconds;