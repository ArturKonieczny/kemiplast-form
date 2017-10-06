export default function round(value, accuracy = 0) {
  const weight = Math.pow(10, accuracy);
  const newValue = Math.round(value * weight);

  return newValue / weight;
}
