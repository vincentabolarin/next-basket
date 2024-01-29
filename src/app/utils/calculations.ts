export const getDiscountedPrice = (price: number, discountPercentage: number) => {
  const discountedPrice = (price - discountPercentage / 100 * price).toFixed(2);

  return Number(discountedPrice);
};

export const toDollars = (amount: number) => {
  let num = 0;

  try {
    num = Number(amount);
  } catch (error) {
    num = amount;
  }

  return (num).toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
};