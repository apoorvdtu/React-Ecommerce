import React from "react";

import { ProductCard } from "./ProductCard";

import { Product } from "../../types/interface";

import "./Products.css";

type ProductsProps = {
  categoryName: string;
  products: Product[];
};

export const Products = ({ categoryName, products }: ProductsProps) => (
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
