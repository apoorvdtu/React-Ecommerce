import { Product } from "../../types";
import { PRODUCT_CATEGORY_OPTIONS } from "./constants";

export const addProductFormValidation = (product: Product) => {
  const { productName, productOriginalPrice, productDiscountPrice, productStockUnits } = product;
  return (
    productName.trim().length !== 0 &&
    !Number.isNaN(+productOriginalPrice) &&
    !Number.isNaN(+productDiscountPrice) &&
    !Number.isNaN(+productStockUnits)
  );
};

export const initializeProduct = (): Product => {
  return {
    productId: crypto.randomUUID(),
    productName: "",
    productOriginalPrice: 0,
    productDiscountPrice: 0,
    productCategory: PRODUCT_CATEGORY_OPTIONS[0].value,
    productStockUnits: 0,
  };
};
