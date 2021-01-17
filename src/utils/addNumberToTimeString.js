const addNumberToTimeString = (numbers) => {
  const maxDigits = 6;

  if (numbers.length > maxDigits) return '99:59:59';

  const currentArray = [...numbers];
  const sizeDifference = maxDigits - currentArray.length;

  for (let index = 0; index < sizeDifference; index += 1) {
    currentArray.splice(0, 0, "0");
  }


  const timeStamp = currentArray.join('');

  return timeStamp.replace(
    /(\d{2})(\d{2})(\d{2})/,
    "$1:$2:$3"
  );
}

export default addNumberToTimeString;
