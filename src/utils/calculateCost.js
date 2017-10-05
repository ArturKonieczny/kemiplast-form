export default function calculateCost(price, ammount) {
  if (isNaN(ammount) || ammount.length === 0) {
    return 0;
  }

  return Number(price.replace(/,/g, '.')) * Number(ammount.replace(/,/g, '.'));
}
