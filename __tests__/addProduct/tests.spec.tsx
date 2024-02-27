import React from "react";
import { render } from "@testing-library/react";

import { AddProductForm } from "../../components/addProduct/AddProductForm";
import { Product } from "../../types";
import { faker } from "@faker-js/faker";

const buildAddProductFormProps = () => {
  const product: Product = {
    productName: faker.commerce.productName(),
    productCategory: faker.commerce.department(),
    productId: faker.string.uuid(),
    productDiscountPrice: faker.number.int(),
    productOriginalPrice: faker.number.int(),
    productStockUnits: faker.number.int(),
  };

  const handleAddProductForm = jest.fn();
  const handleFormElementChange = jest.fn();

  return {
    product,
    handleAddProductForm,
    handleFormElementChange,
  };
};

describe("Add Product Form Component", () => {
  test("Renders", () => {
    const addProductFormProps = buildAddProductFormProps();
    render(<AddProductForm {...addProductFormProps} />);
  });
});
