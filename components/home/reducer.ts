import { addToCart, deleteFromCart, resetCart, removeFromCart } from "./helper";
import { Cart, Product } from "../../types/interface";
import { CART_REDUCER_ACTIONS } from "./constants";

export type CartReducerAction = {
  payload?: Product;
  type: string;
};

export const cartReducer = (state: Cart[], action: CartReducerAction) => {
  switch (action.type) {
    case CART_REDUCER_ACTIONS.ADD_TO_CART:
      return addToCart(state, action.payload!);
    case CART_REDUCER_ACTIONS.REMOVE_FROM_CART:
      return removeFromCart(state, action.payload!);
    case CART_REDUCER_ACTIONS.DELETE_FROM_CART:
      return deleteFromCart(state, action.payload!);
    case CART_REDUCER_ACTIONS.RESET_STATE:
      return resetCart();
    default:
      return state;
  }
};
