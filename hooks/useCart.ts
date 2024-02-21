import { createContext, useContext } from "react";

export type Cart = {
  id: string;
  qty: number;
};
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
