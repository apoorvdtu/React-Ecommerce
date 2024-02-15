export const ACTIONS = {
  CHANGE_PRODUCT_NAME: "CHANGE_PRODUCT_NAME",
  CHANGE_PRODUCT_CATEGORY: "CHANGE_PRODUCT_CATEGORY",
  CHANGE_PRODUCT_ORIGINAL_PRICE: "CHANGE_PRODUCT_ORIGINAL_PRICE",
  CHANGE_PRODUCT_DISCOUNT_PRICE: "CHANGE_PRODUCT_DISCOUNT_PRICE",
  CHANGE_PRODUCT_STOCK_UNITS: "CHANGE_PRODUCT_STOCK_UNITS",
  RESET_STATE: "RESET_STATE",
};
export const PRODUCT_FORM_IDS = {
  productName: "productName",
  productCategory: "productCategory",
  productOriginalPrice: "productOriginalPrice",
  productDiscountPrice: "productDiscountPrice",
  productStockUnits: "productStockUnits",
};
export const PRODUCT_ADDITION_SUCCESS_MESSAGE = "New Product Added Succesfully";
export const PRODUCT_ADDITION_FAILURE_MESSAGE = "Please fill all Details correctly";
export const PRODUCT_CATEGORY_OPTIONS = [
  { label: "Mobiles", value: "mobiles" },
  { label: "TVs", value: "tvs" },
];
export const EventIDActionsType = new Map();
const createEventIDActionsType = () => {
  EventIDActionsType.set(PRODUCT_FORM_IDS.productName, ACTIONS.CHANGE_PRODUCT_NAME);
  EventIDActionsType.set(PRODUCT_FORM_IDS.productCategory, ACTIONS.CHANGE_PRODUCT_CATEGORY);
  EventIDActionsType.set(
    PRODUCT_FORM_IDS.productOriginalPrice,
    ACTIONS.CHANGE_PRODUCT_ORIGINAL_PRICE
  );
  EventIDActionsType.set(
    PRODUCT_FORM_IDS.productDiscountPrice,
    ACTIONS.CHANGE_PRODUCT_DISCOUNT_PRICE
  );
  EventIDActionsType.set(PRODUCT_FORM_IDS.productStockUnits, ACTIONS.CHANGE_PRODUCT_STOCK_UNITS);
};
createEventIDActionsType();
