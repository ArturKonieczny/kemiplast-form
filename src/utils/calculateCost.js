import round from './round.js';

export default function calculateCost(price, ammount, ammountValid) {
  if (!ammountValid) {
    return 0;
  }
  const priceValue = Number(price.replace(/,/g, '.'));

  return round(priceValue * ammount, 2);
}
