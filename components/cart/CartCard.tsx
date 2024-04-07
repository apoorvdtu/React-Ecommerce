import React, { Dispatch, useCallback } from "react";

import { Product } from "../../types/interface";

import { CartReducerAction } from "../home/reducer";
import { CART_REDUCER_ACTIONS } from "../home/constants";

type CardCardProps = {
  product: Product;
  productQty: number;
  dispatch: Dispatch<CartReducerAction>;
};
export const CartCard = ({ dispatch, product, productQty }: CardCardProps) => {
  const {
    productName,
    productCategory,
    productId,
    productDiscountPrice,
    productOriginalPrice,
    productStockUnits,
  } = product;

  const increaseProductQuantity = useCallback(() => {
    dispatch({ type: CART_REDUCER_ACTIONS.ADD_TO_CART, payload: product });
  }, []);

  const decreaseProductQuantity = useCallback(() => {
    dispatch({ type: CART_REDUCER_ACTIONS.REMOVE_FROM_CART, payload: product });
  }, []);

  const deleteProduct = useCallback(() => {
    dispatch({ type: CART_REDUCER_ACTIONS.DELETE_FROM_CART, payload: product });
  }, []);

  return (
    <div className="cart-item">
      <div className="cart-item__product-info">
        <div className="cart-item__product-name" aria-label="Product Name">
          {productName}
        </div>
        <div className="cart-item__in-stock" aria-label="In stock">
          {productStockUnits > 0 && "In Stock"}
          {productStockUnits === 0 && "Out Of Stock"}
        </div>
        <div className="cart-item__free-shipping" aria-label="Eligible for FREE Shipping">
          Eligible for FREE Shipping
        </div>
        <div className="cart-item__product-counter">
          <button
            onClick={decreaseProductQuantity}
            className="cart-item__product-button cart-item__product-button--dec "
            aria-label="Decrease Quantity"
          >
            -
          </button>
          <div className="cart-item__product-qty" aria-label="Quantity">
            &nbsp;Qty:&nbsp;{productQty}
          </div>
          <button
            onClick={increaseProductQuantity}
            className="cart-item__product-button cart-item__product-button--inc"
            aria-label="Increase Quantity"
          >
            +
          </button>
        </div>
        <button
          onClick={deleteProduct}
          className="cart-item__product-remove"
          aria-label="Remove Product"
        >
          Delete
        </button>
      </div>
      <div className="product-price">
        <div className="product-price__current-price" aria-label="Current Price">
          Rs{productDiscountPrice}
        </div>
        <div className="product-price__product-mrp-price" aria-label="MRP">
          MRP:
          <del>{productOriginalPrice}</del>
        </div>
      </div>
    </div>
  );
};
