export default function displayCurrency(value) {
  const valueArray = String(value).split('.');

  if (!valueArray[1]) {
    return `${valueArray[0]},00 zł.`;
  }

  if (valueArray[1].length === 1) {
    return `${valueArray.join(',')}0 zł.`;
  }

  return `${valueArray.join(',')} zł.`;
}
