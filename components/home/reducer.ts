import { addToCart, deleteFromCart, resetCart, removeFromCart } from "./helper.ts";

import { ACTIONS } from "./constants.ts";
import { Cart } from "../../hooks/useCart.ts";
import { Product } from "../addProduct/interface.ts";
type Action = {
  payload: Product;
  type: string;
};
export const cartReducer = (state: Cart[], action: Action) => {
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
      return state;
  }
};
