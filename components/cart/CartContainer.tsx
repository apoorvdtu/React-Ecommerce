import React from "react";
import { Cart } from "../../types/interface";
import { useProducts } from "../../hooks/useProducts";
import { CartCard } from "./CartCard";
import { useCart } from "../../hooks/useCart";
import { CartCardHeader } from "./CartCardHeader";
import { CartPrice } from "./CartPrice";
import { CartPriceContainer } from "./CartPriceContainer";
export const CartContainer = () => {
  const [cart, dispatch] = useCart();
  const [products] = useProducts();
  return (
    <div className="cart-container">
      <div className="cart-items">
        <CartCardHeader />
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
      </div>
      <CartPriceContainer />
    </div>
  );
};
