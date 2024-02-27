import React from "react";
import { useCart, useProducts } from "../../hooks";
import { CartCard } from "./CartCard";

export const CartCardContainer = () => {
  const [cart, dispatch] = useCart();
  const [products] = useProducts();
  return (
    <>
      {cart.map((cartItem) => {
        const product = products.find((product) => cartItem.id === product.productId);
        if (!product) return <></>;
        return (
          <>
            <CartCard dispatch={dispatch} productQty={cartItem.qty} product={product} />
            <hr />
          </>
        );
      })}
    </>
  );
};
