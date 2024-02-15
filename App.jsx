import React, { useReducer } from "react";
import { Outlet } from "react-router";
import { CartContext } from "./hooks/useCart.js";
import { cartReducer } from "./components/home/reducer.js";
import { initializeCart } from "./components/home/helper.js";
import { useLocalStorage } from "./hooks/useLocalStorage.js";
import {
  PRODUCTS_DEFAULT_INITIAL_VALUE,
  PRODUCTS_LOCAL_STORAGE_KEY,
} from "./components/utilities/constants.js";
import { ProductsContext } from "./hooks/useProducts.js";
function App() {
  const [cart, dispatch] = useReducer(cartReducer, {}, initializeCart);
  const [products, setProducts] = useLocalStorage(
    PRODUCTS_LOCAL_STORAGE_KEY,
    PRODUCTS_DEFAULT_INITIAL_VALUE
  );

  return (
    <ProductsContext.Provider value={[products, setProducts]}>
      <CartContext.Provider value={[cart, dispatch]}>
        <Outlet />
      </CartContext.Provider>
    </ProductsContext.Provider>
  );
}

export default App;
