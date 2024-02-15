/* eslint-disable react/prop-types */
import { ProductCard } from "./ProductCard.jsx";

import "./Products.css";

function Products({ categoryName, products }) {
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
}

export default Products;
