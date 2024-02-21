export interface Product {
  productId: string;
  productName: string;
  productCategory: string;
  productOriginalPrice: number;
  productDiscountPrice: number;
  productStockUnits: number;
}
export type Cart = {
  id: string;
  qty: number;
};
