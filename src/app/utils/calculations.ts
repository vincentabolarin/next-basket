export const getDiscountedPrice = (price: number, discountPercentage: number) => {
  const discountedPrice = (price - discountPercentage / 100 * price).toFixed(2);

  return discountedPrice;
};
