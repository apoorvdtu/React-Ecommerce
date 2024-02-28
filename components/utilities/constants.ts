import { Cart, Order, Product } from "../../types/interface";

export const PRODUCT_MAX_QUANTITY_REACHED_MESSAGE = "MAXIMUM PRODUCT QUANTITY REACHED";

export const PRODUCT_MIN_QUANTITY_REACHED_MESSAGE = "MINIMUM PRODUCT QUANTITY is 1";

export const PRODUCTS_LOCAL_STORAGE_KEY = "products";

export const PRODUCTS_DEFAULT_INITIAL_VALUE: Product[] = [];

export const CART_LOCAL_STORAGE_KEY = "cart";

export const CART_DEFAULT_INITIAL_VALUE: Cart[] = [];

export const ORDERS_LOCAL_STORAGE_KEY = "orders";

export const ORDERS_DEFAULT_INITIAL_VALUE: Order[] = [];