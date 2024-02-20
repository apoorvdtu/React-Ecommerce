import { createContext, useContext } from "react";

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
