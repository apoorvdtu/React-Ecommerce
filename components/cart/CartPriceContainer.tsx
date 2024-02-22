import React from "react";
import { useCart } from "../../hooks/useCart";
import { Cart, Order, Product } from "../../types/interface";
import { useProducts } from "../../hooks/useProducts";
import { findPrice } from "./helper";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { ORDERS_DEFAULT_INITIAL_VALUE, ORDERS_LOCAL_STORAGE_KEY } from "../utilities/constants";
import { CartPrice } from "./CartPrice";
import { CART_REDUCER_ACTIONS } from "../home/constants";

export const CartPriceContainer = () => {
  const [cart, dispatch] = useCart();
  const [products, setProducts] = useProducts();
  const [orders, setOrders] = useLocalStorage(
    ORDERS_LOCAL_STORAGE_KEY,
    ORDERS_DEFAULT_INITIAL_VALUE
  );
  const prices = findPrice(cart, products);
  const { totalDiscountPrice, totalOriginalPrice, discountPercentage, discountValue } = prices;
  const placeOrderButtonOnClick = () => {
    const order: Order = {
      date: Date().toString(),
      items: [],
      totalDiscountPrice,
      totalOriginalPrice,
      discountPercentage,
      discountValue,
    };
    cart.forEach((cartItem) => {
      const qty = cartItem.qty;
      const product = products.find((product) => product.productId === cartItem.id);
      if (product) {
        product.productStockUnits -= qty;
        order.items.push({
          productId: product.productId,
          productName: product.productName,
          productQty: qty,
        });
      }
    });
    setOrders([...orders, order]);
    setProducts([...products]);
    dispatch({ type: CART_REDUCER_ACTIONS.RESET_STATE });
  };
  return <CartPrice prices={prices} placeOrderButtonOnClick={placeOrderButtonOnClick} />;
};
