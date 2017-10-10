export default function calculateDelivery(deliveryData, weight, ammount, ammountValid) {
  if (!ammountValid) {
    return 0;
  }

  const totalWeight = ammount * weight;
  let deliveryCost = `UWAGA! Waga zamówienia przekracza ${deliveryData.tresholds[0] / 1000}kg!
  Koszty przesyłki zostaną ustalone indywidualnie.`;

  if (deliveryData.tresholds[0] === -1) {
    return 0;
  }

  deliveryData.tresholds.forEach((treshold, index) => {
    if (totalWeight <= treshold) {
      deliveryCost = deliveryData.values[index];
    }
  });

  return deliveryCost;
}
