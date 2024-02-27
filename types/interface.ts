import { Dispatch, SetStateAction } from "react";
import { CartReducerAction } from "../components/home";

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

export type ProductContextProviderValueType = [Product[], Dispatch<SetStateAction<Product[]>>];

export type CartContextProviderValueType = [Cart[], Dispatch<CartReducerAction>];
