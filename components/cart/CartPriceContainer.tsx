import React, { useCallback, useMemo } from "react";

import { CartPrice } from "./CartPrice";

import { useProducts, useCart, useLocalStorage } from "../../hooks";

import { findPrice } from "./helper";
import { ORDERS_DEFAULT_INITIAL_VALUE, ORDERS_LOCAL_STORAGE_KEY } from "../utilities/constants";
import { Order } from "../../types/interface";
import { CART_REDUCER_ACTIONS } from "../home/";

export const CartPriceContainer = () => {
  const [cart, dispatch] = useCart();
  const [products, setProducts] = useProducts();
  const [orders, setOrders] = useLocalStorage(
    ORDERS_LOCAL_STORAGE_KEY,
    ORDERS_DEFAULT_INITIAL_VALUE
  );
  const prices = useMemo(() => findPrice(cart, products), [cart, products]);

  const { totalDiscountPrice, totalOriginalPrice, discountPercentage, discountValue } = prices;

  const placeOrderButtonOnClick = useCallback(() => {
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
  }, [cart, products, orders]);

  return <CartPrice prices={prices} placeOrderButtonOnClick={placeOrderButtonOnClick} />;
};
