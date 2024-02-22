import React from "react";
export const CartCardHeader = () => {
  return (
    <div className="cart-items__header">
      <span className="cart-items__shopping-cart" aria-label="Shopping Cart">
        Shopping Cart
      </span>
      <span className="cart-items__shopping-price" aria-label="Price">
        Price
      </span>
    </div>
  );
};
