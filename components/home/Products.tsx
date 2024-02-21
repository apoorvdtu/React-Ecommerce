/* eslint-disable react/prop-types */
import React from "react";

import { ProductCard } from "./ProductCard.js";

import "./Products.css";
import { Product } from "../addProduct/interface.js";
type ProductsProps = {
  categoryName: string;
  products: Product[];
};
export const Products = ({ categoryName, products }: ProductsProps) => {
  return (
    <div className="products">
      <div className="products__wrapper-name">
        <strong>Best {categoryName[0].toUpperCase() + categoryName.substring(1)}</strong>
      </div>
      <div className="products__wrapper">
        {products.map((product) => {
          return <ProductCard product={product} key={product.productId} />;
        })}
      </div>
    </div>
  );
};
