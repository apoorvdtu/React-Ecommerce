import React, { useMemo, useReducer } from "react";
import { Outlet } from "react-router";

import { useLocalStorage, CartContext, ProductsContext } from "./hooks/";

import { cartReducer, initializeCart } from "./components/home";

import { CartContextProviderValueType, ProductContextProviderValueType } from "./types";

import {
  PRODUCTS_DEFAULT_INITIAL_VALUE,
  PRODUCTS_LOCAL_STORAGE_KEY,
} from "./components/utilities/";

import "./App.css";
export function App() {
  const [cart, dispatch] = useReducer(cartReducer, {}, initializeCart);

  const [products, setProducts] = useLocalStorage(
    PRODUCTS_LOCAL_STORAGE_KEY,
    PRODUCTS_DEFAULT_INITIAL_VALUE
  );

  const ProductContexProviderValue = useMemo(
    (): ProductContextProviderValueType => [products, setProducts],
    [products, setProducts]
  );

  const CartContexProviderValue = useMemo(
    (): CartContextProviderValueType => [cart, dispatch],
    [cart, dispatch]
  );

  return (
    <ProductsContext.Provider value={ProductContexProviderValue}>
      <CartContext.Provider value={CartContexProviderValue}>
        <Outlet />
      </CartContext.Provider>
    </ProductsContext.Provider>
  );
}
