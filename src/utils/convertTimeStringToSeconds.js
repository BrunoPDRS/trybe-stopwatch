const convertTimeStringToSeconds = (display) => {
  const [hours, minutes, seconds] = display.split(':');
  const hoursToSeconds = parseInt(hours) * 3600;
  const minutesToSeconds = parseInt(minutes) * 60;
  
  const timeInSeconds = hoursToSeconds + minutesToSeconds + parseInt(seconds);

  return timeInSeconds;
}

export default convertTimeStringToSeconds;