/* eslint-disable react/prop-types */
import { ProductsContext, useProducts } from "../hooks/useProducts.js";

import { NavBar, Products } from "../components/home";

import { PRODUCT_CATEGORY_OPTIONS } from "../components/addProduct/constants.js";

import "../App.css";

export function Home() {
  const [products] = useProducts(ProductsContext);

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
