import { createContext, useContext } from "react";

import { Cart } from "../types/interface";

export const CartContext = createContext<[cart: Cart[], dispatch: React.Dispatch<any>] | null>(
  null
);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("The Component is not wrapped with CartContext");
  }
  return context;
};
