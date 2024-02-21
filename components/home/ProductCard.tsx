/* eslint-disable react/prop-types */
import React from "react";

import { useCart } from "../../hooks/useCart.ts";
import { Product } from "../addProduct/interface.ts";

import { ACTIONS } from "./constants.ts";

import "./ProductCard.css";
type ProductCardProps = {
  product: Product;
};
export const ProductCard = ({ product }: ProductCardProps) => {
  const [, dispatch] = useCart();

  const handleAddToCart = () => {
    dispatch({ type: ACTIONS.ADD_TO_CART, payload: product });
  };
  const { productName, productOriginalPrice, productDiscountPrice } = product;

  return (
    <div className="product">
      {/* <img
              className = "product__image"
              className="best-mobile-product-image"
              src="/icons/phoneicon.png"
              alt="Product Image"
            /> */}
      <h3 className="product__name" aria-label="Product Name">
        {productName}
      </h3>
      <del>
        Rs{" "}
        <span className="product__original-price" aria-label="Product Original Price">
          {productOriginalPrice}
        </span>
      </del>
      <span>
        Rs{" "}
        <span className="product__discount-price" aria-label="Product Discounted Price">
          {productDiscountPrice}
        </span>
      </span>
      <button
        onClick={handleAddToCart}
        className="product__add-to-cart-btn"
        aria-label="Add To Cart"
      >
        Add to Cart
      </button>
    </div>
  );
};
