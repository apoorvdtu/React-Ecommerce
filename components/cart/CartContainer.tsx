import React from "react";

import { CartCardHeader } from "./CartCardHeader";
import { CartPriceContainer } from "./CartPriceContainer";
import { CartCardContainer } from "./CartCardContainer.tsx";

export const CartContainer = () => (
  <div className="cart-container">
    <div className="cart-items">
      <CartCardHeader />
      <CartCardContainer />
    </div>
    <CartPriceContainer />
  </div>
);
