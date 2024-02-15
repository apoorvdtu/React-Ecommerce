/* eslint-disable react/prop-types */
import { ProductsContext, useProducts } from "../hooks/useProducts.js";

import NavBar from "../components/home/NavBar.jsx";
import Products from "../components/home/Products.jsx";

import { PRODUCT_CATEGORY_OPTIONS } from "../components/addProduct/constants.js";

import "../App.css";

function Home() {
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

export default Home;
