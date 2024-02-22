import React from "react";
import { CartContainer } from "../components/cart/CartContainer";
import "./Cart.css";
import { CartHeader } from "../components/cart/CartHeader";

export const Cart = () => {
  return (
    <>
      <CartHeader />
      <CartContainer />
    </>
  );
};
