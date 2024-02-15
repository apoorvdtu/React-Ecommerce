import { CART_DEFAULT_INITIAL_VALUE, CART_LOCAL_STORAGE_KEY } from "../utilities/constants.js";

export const initializeCart = () => {
  const cart = window.localStorage.getItem(CART_LOCAL_STORAGE_KEY)
    ? JSON.parse(window.localStorage.getItem(CART_LOCAL_STORAGE_KEY))
    : CART_DEFAULT_INITIAL_VALUE;
  return cart;
};
export const addToCart = (cart, product, qty = 1) => {
  const cartItem = cart.find((cartItem) => cartItem.id === product.productId);
  if (product.productStockUnits < qty) {
    alert(`Max Quantities Available ${product.productStockUnits}`);
    return;
  }
  let cartCopy = [];
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
export const removeFromCart = (cart, product, qty = 1) => {
  const cartItem = cart.find((cartItem) => cartItem.id === product.productId);
  let cartCopy = [];
  if (cartItem) {
    cartItem.qty -= qty;
  }
  cartCopy = [...cartCopy, ...cart];
  window.localStorage.setItem(CART_LOCAL_STORAGE_KEY, JSON.stringify(cartCopy));
  return cartCopy;
};
export const deleteFromCart = (cart, product) => {
  const cartItemIndex = cart.findIndex((cartItem) => cartItem.id === product.productId);
  const cartCopy = [...cart];
  cartCopy.splice(cartItemIndex, 1);
  window.localStorage.setItem(CART_LOCAL_STORAGE_KEY, JSON.stringify(cartCopy));
  return cartCopy;
};
export const resetCart = () => {
  window.localStorage.setItem(CART_LOCAL_STORAGE_KEY, "[]");
  return [];
};
