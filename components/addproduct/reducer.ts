import { initializeProduct } from "./helper.js";

import { PRODUCT_REDUCER_ACTIONS } from "./constants.ts";
import { Product } from "../../types/interface.ts";

export type ProductAction = {
  type: string;
  payload?: string;
};
export const productReducer = (state: Product, action: ProductAction): Product => {
  switch (action.type) {
    case PRODUCT_REDUCER_ACTIONS.CHANGE_PRODUCT_NAME:
      return { ...state, productName: action.payload! };
    case PRODUCT_REDUCER_ACTIONS.CHANGE_PRODUCT_CATEGORY:
      return { ...state, productCategory: action.payload! };
    case PRODUCT_REDUCER_ACTIONS.CHANGE_PRODUCT_ORIGINAL_PRICE:
      return { ...state, productOriginalPrice: +action.payload! };
    case PRODUCT_REDUCER_ACTIONS.CHANGE_PRODUCT_DISCOUNT_PRICE:
      return { ...state, productDiscountPrice: +action.payload! };
    case PRODUCT_REDUCER_ACTIONS.CHANGE_PRODUCT_STOCK_UNITS:
      return { ...state, productStockUnits: +action.payload! };
    case PRODUCT_REDUCER_ACTIONS.RESET_STATE:
      return initializeProduct();
    default:
      return state;
  }
};
