import { Cart, Product } from "../../types";
import { Prices } from "./types";

export const findPrice = (cart: Cart[], products: Product[]): Prices => {
  let totalOriginalPrice = 0;
  let totalDiscountPrice = 0;

  cart.forEach((cartItem) => {
    const product = products.find((product) => product.productId === cartItem.id);
    if (product) {
      const qty = cartItem.qty;
      totalDiscountPrice = totalDiscountPrice + product.productDiscountPrice * qty;
      totalOriginalPrice = totalOriginalPrice + product.productOriginalPrice * qty;
    }
  });
  const discountValue = totalOriginalPrice - totalDiscountPrice;
  const discountPercentage =
    totalOriginalPrice === 0
      ? 0
      : Math.floor(((totalOriginalPrice - totalDiscountPrice) / totalOriginalPrice) * 100);
  return {
    totalDiscountPrice,
    totalOriginalPrice,
    discountValue,
    discountPercentage,
  };
};
