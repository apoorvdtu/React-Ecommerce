import { Cart, Product } from "../../types/interface.js";

import { CART_DEFAULT_INITIAL_VALUE, CART_LOCAL_STORAGE_KEY } from "../utilities/constants.js";

export const initializeCart = (): Cart[] => {
  const cartJSON = window.localStorage.getItem(CART_LOCAL_STORAGE_KEY);
  const cart = cartJSON ? JSON.parse(cartJSON) : CART_DEFAULT_INITIAL_VALUE;
  return cart as Cart[];
};

export const addToCart = (cart: Cart[], product: Product, qty = 1): Cart[] => {
  const cartItem = cart.find((cartItem) => cartItem.id === product.productId);
  if (product.productStockUnits < qty) {
    alert(`Max Quantities Available ${product.productStockUnits}`);
    return cart;
  }
  let cartCopy: Cart[] = [];
  if (cartItem) {
    cartItem.qty += qty;
  } else {
    cartCopy = [
      {
        id: product.productId,
        qty,
      },
    ];
  }
  cartCopy = [...cartCopy, ...cart];
  window.localStorage.setItem(CART_LOCAL_STORAGE_KEY, JSON.stringify(cartCopy));
  return cartCopy;
};

export const removeFromCart = (cart: Cart[], product: Product, qty = 1): Cart[] => {
  const cartItem = cart.find((cartItem) => cartItem.id === product.productId);
  let cartCopy: Cart[] = [];
  if (cartItem) {
    cartItem.qty -= qty;
  }
  cartCopy = [...cartCopy, ...cart];
  window.localStorage.setItem(CART_LOCAL_STORAGE_KEY, JSON.stringify(cartCopy));
  return cartCopy;
};

export const deleteFromCart = (cart: Cart[], product: Product): Cart[] => {
  const cartItemIndex = cart.findIndex((cartItem) => cartItem.id === product.productId);
  const cartCopy = [...cart];
  cartCopy.splice(cartItemIndex, 1);
  window.localStorage.setItem(CART_LOCAL_STORAGE_KEY, JSON.stringify(cartCopy));
  return cartCopy;
};

export const resetCart = (): Cart[] => {
  window.localStorage.setItem(CART_LOCAL_STORAGE_KEY, "[]");
  return [];
};
