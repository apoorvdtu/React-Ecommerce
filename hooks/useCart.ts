import { Dispatch, createContext, useContext } from "react";

import { Cart } from "../types/interface";
import { CartReducerAction } from "../components/home/reducer";

export const CartContext = createContext<[Cart[], Dispatch<CartReducerAction>] | null>(null);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("The Component is not wrapped with CartContext");
  }
  return context;
};
