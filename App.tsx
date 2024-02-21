import React, { useReducer } from "react";
import { Outlet } from "react-router";

import { ProductsContext } from "./hooks/useProducts.ts";
import { useLocalStorage } from "./hooks/useLocalStorage.js";
import { Cart, CartContext } from "./hooks/useCart.js";

import { cartReducer } from "./components/home/reducer.js";
import { initializeCart } from "./components/home/helper.js";
import {
  PRODUCTS_DEFAULT_INITIAL_VALUE,
  PRODUCTS_LOCAL_STORAGE_KEY,
} from "./components/utilities/constants.js";

import { Product } from "./components/addProduct/interface.ts";

export function App() {
  const [cart, dispatch] = useReducer(cartReducer, {}, initializeCart);
  const [products, setProducts] = useLocalStorage(
    PRODUCTS_LOCAL_STORAGE_KEY,
    PRODUCTS_DEFAULT_INITIAL_VALUE
  );

  return (
    <ProductsContext.Provider value={[products as Product[], setProducts]}>
      <CartContext.Provider value={[cart as Cart[], dispatch]}>
        <Outlet />
      </CartContext.Provider>
    </ProductsContext.Provider>
  );
}
