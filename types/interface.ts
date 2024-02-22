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
export type OrderItem = {
  productId: string;
  productName: string;
  productQty: number;
};
export type Order = {
  date: string;
  items: OrderItem[];
  totalDiscountPrice: number;
  totalOriginalPrice: number;
  discountPercentage: number;
  discountValue: number;
};
