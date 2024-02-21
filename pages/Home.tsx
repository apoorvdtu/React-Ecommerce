/* eslint-disable react/prop-types */
import React from "react";

import { useProducts } from "../hooks/useProducts.ts";

import { NavBar, Products } from "../components/home/index.ts";

import { PRODUCT_CATEGORY_OPTIONS } from "../components/addProduct/constants.ts";

import "../App.css";

export function Home() {
  const [products] = useProducts();

  const categoryWiseProducts = PRODUCT_CATEGORY_OPTIONS.map(({ value }) => {
    const categoryProducts = products.filter((product) => product.productCategory === value);
    return {
      categoryName: value,
      products: categoryProducts,
    };
  });
  return (
    <>
      <NavBar />
      {categoryWiseProducts.map((props) => {
        return <Products key={props.categoryName} {...props} />;
      })}
    </>
  );
}
