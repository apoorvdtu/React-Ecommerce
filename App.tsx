import React, { useReducer } from "react";
import { Outlet } from "react-router";

import { ProductsContext } from "./hooks/useProducts.ts";
import { useLocalStorage } from "./hooks/useLocalStorage.js";
import { CartContext } from "./hooks/useCart.js";

import { cartReducer } from "./components/home/reducer.js";
import { initializeCart } from "./components/home/helper.js";
import {
  PRODUCTS_DEFAULT_INITIAL_VALUE,
  PRODUCTS_LOCAL_STORAGE_KEY,
} from "./components/utilities/constants.js";

export function App() {
  const [cart, dispatch] = useReducer(cartReducer, {}, initializeCart);
  const [products, setProducts] = useLocalStorage(
    PRODUCTS_LOCAL_STORAGE_KEY,
    PRODUCTS_DEFAULT_INITIAL_VALUE
  );
  console.log(typeof PRODUCTS_DEFAULT_INITIAL_VALUE);

  return (
    <ProductsContext.Provider value={[products, setProducts]}>
      <CartContext.Provider value={[cart, dispatch]}>
        <Outlet />
      </CartContext.Provider>
    </ProductsContext.Provider>
  );
}
