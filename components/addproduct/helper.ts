import { PRODUCT_CATEGORY_OPTIONS } from "./constants.js";
import { Product } from "./interface.js";

export const addProductFormValidation = (product: Product) => {
  const { productName, productOriginalPrice, productDiscountPrice, productStockUnits } = product;
  return (
    productName.trim().length !== 0 &&
    !Number.isNaN(+productOriginalPrice) &&
    !Number.isNaN(+productDiscountPrice) &&
    !Number.isNaN(+productStockUnits)
  );
};

export const initializeProduct = () => {
  return {
    productId: crypto.randomUUID(),
    productName: "",
    productOriginalPrice: "",
    productDiscountPrice: "",
    productCategory: PRODUCT_CATEGORY_OPTIONS[0].value,
    productStockUnits: "",
  };
};
