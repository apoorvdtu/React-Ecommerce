import { createContext, useContext } from "react";

import { Product } from "../types/interface";

export const ProductsContext = createContext<
  null | [products: Product[], setProducts: (products: Product[]) => void]
>(null);

export const useProducts = () => {
  const context = useContext(ProductsContext);
  if (!context) {
    throw new Error("The Component is not wrapped with Products Context");
  }
  return context;
};
