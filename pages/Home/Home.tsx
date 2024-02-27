/* eslint-disable react/prop-types */
import React from "react";

import { useProducts } from "../../hooks";

import { NavBar, Products } from "../../components/home";

import { PRODUCT_CATEGORY_OPTIONS } from "../../components/addProduct";

import "../../App.css";

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
      {categoryWiseProducts.map((props) => (
        <Products key={props.categoryName} {...props} />
      ))}
    </>
  );
}
