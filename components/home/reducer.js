import { addToCart, deleteFromCart, resetCart, removeFromCart } from "./helper.js";

import { ACTIONS } from "./constants.js";

export function cartReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TO_CART:
      return addToCart(state, action.payload);
    case ACTIONS.REMOVE_FROM_CART:
      return removeFromCart(state, action.payload);
    case ACTIONS.DELETE_FROM_CART:
      return deleteFromCart(state, action.payload);
    case ACTIONS.RESET_STATE:
      return resetCart();
    default:
      throw new Error(`Unhandled ACTION.TYPE : ${action.type}`);
  }
}
