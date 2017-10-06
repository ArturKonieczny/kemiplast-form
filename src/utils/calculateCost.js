import round from './round.js';

export default function calculateCost(price, ammount) {
  if (isNaN(ammount) || ammount.length === 0) {
    return 0;
  }
  const priceValue = Number(price.replace(/,/g, '.'));
  const ammountValue = Number(ammount.replace(/,/g, '.'));

  return round(priceValue * ammountValue, 2);
}
