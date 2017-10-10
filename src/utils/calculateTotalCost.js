import displayCurrency from './displayCurrency';

export default function calculateTotalCost(productCost, deliveryCost) {
  if (isNaN(deliveryCost)) {
    return `${displayCurrency(productCost)} + kp.`;
  }

  return displayCurrency(productCost + deliveryCost);
}
