export const getRubPrice = (
  price: number,
  rate: number,
  rateFor = 10000,
): string => {
  const revertedRate = rateFor / rate;

  return (price * revertedRate).toFixed(2);
};
