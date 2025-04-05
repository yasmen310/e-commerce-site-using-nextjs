import { cache } from "react";

export const fetchCartSummary = cache(async (cart) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = total > 50 ? 0 : 5; 
  const grandTotal = total + shipping;

  return { total, shipping, grandTotal };
});
