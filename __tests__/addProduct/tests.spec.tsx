import React from "react";
import { render, screen } from "@testing-library/react";

import { AddProductForm } from "../../components/addProduct/AddProductForm";
import { Product } from "../../types";
import { faker } from "@faker-js/faker";
import userEvent from "@testing-library/user-event";
import { AddProductFormContainer, AddProductHeader } from "../../components/addProduct";

const buildAddProductFormProps = () => {
  const product: Product = sampleProductGeneration();

  const handleAddProductForm = jest.fn();
  const handleFormElementChange = jest.fn();

  return {
    product,
    handleAddProductForm,
    handleFormElementChange,
  };
};

const sampleProductGeneration = (): Product => ({
  productName: faker.commerce.productName(),
  productCategory: "mobiles",
  productId: faker.string.uuid(),
  productDiscountPrice: faker.number.int(),
  productOriginalPrice: faker.number.int(),
  productStockUnits: faker.number.int(),
});

const buildAddProductFormProps_WithEmptyProduct = () => {
  const product: Product = {
    productName: "",
    productCategory: "",
    productId: faker.string.uuid(),
    productDiscountPrice: 0,
    productOriginalPrice: 0,
    productStockUnits: 0,
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

  test("Shows Correct Data", () => {
    const addProductFormProps = buildAddProductFormProps();
    render(<AddProductForm {...addProductFormProps} />);

    const productNameElement: HTMLInputElement = screen.getByRole("textbox", {
      name: /product name/i,
    });

    expect(productNameElement.value).toEqual(addProductFormProps.product.productName);

    const productCategoryElement: HTMLSelectElement = screen.getByRole("combobox", {
      name: /product category/i,
    });
    expect(productCategoryElement.value).toEqual(addProductFormProps.product.productCategory);

    const productOriginalPriceElement: HTMLInputElement = screen.getByRole("spinbutton", {
      name: /product original price/i,
    });
    expect(productOriginalPriceElement.valueAsNumber).toEqual(
      addProductFormProps.product.productOriginalPrice
    );

    const productDiscountPriceElement: HTMLInputElement = screen.getByRole("spinbutton", {
      name: /product discount price/i,
    });
    expect(productDiscountPriceElement.valueAsNumber).toEqual(
      addProductFormProps.product.productDiscountPrice
    );

    const productStockUnitsElement: HTMLInputElement = screen.getByRole("spinbutton", {
      name: /product stock units/i,
    });
    expect(productStockUnitsElement.valueAsNumber).toEqual(
      addProductFormProps.product.productStockUnits
    );
  });

  test("User Input Detection", async () => {
    const addProductFormProps = buildAddProductFormProps_WithEmptyProduct();
    addProductFormProps.handleFormElementChange.mockImplementation(() => {});
    render(<AddProductForm {...addProductFormProps} />);
    const sampleProduct = sampleProductGeneration();
    const user = userEvent.setup();
    const productNameElement: HTMLInputElement = screen.getByRole("textbox", {
      name: /product name/i,
    });
    await user.type(productNameElement, sampleProduct.productName);
    expect(addProductFormProps.handleFormElementChange).toHaveBeenCalled();
    expect(addProductFormProps.handleFormElementChange).toHaveBeenCalledTimes(
      sampleProduct.productName.length
    );
    jest.clearAllMocks();

    const productCategoryElement: HTMLSelectElement = screen.getByRole("combobox", {
      name: /product category/i,
    });
    await user.selectOptions(productCategoryElement, sampleProduct.productCategory);
    expect(addProductFormProps.handleFormElementChange).toHaveBeenCalledTimes(1);
    jest.clearAllMocks();

    const productOriginalPriceElement: HTMLInputElement = screen.getByRole("spinbutton", {
      name: /product original price/i,
    });
    jest.clearAllMocks();

    const productOriginalPrice = `${sampleProduct.productOriginalPrice}`;
    await user.type(productOriginalPriceElement, productOriginalPrice);
    expect(addProductFormProps.handleFormElementChange).toHaveBeenCalled();
    jest.clearAllMocks();

    const productDiscountPriceElement: HTMLInputElement = screen.getByRole("spinbutton", {
      name: /product discount price/i,
    });

    await user.type(productDiscountPriceElement, `${sampleProduct.productDiscountPrice}`);
    expect(addProductFormProps.handleFormElementChange).toHaveBeenCalled();
    jest.clearAllMocks();

    const productStockUnitsElement: HTMLInputElement = screen.getByRole("spinbutton", {
      name: /product stock units/i,
    });
    await user.type(productStockUnitsElement, `${sampleProduct.productStockUnits}`);
    expect(addProductFormProps.handleFormElementChange).toHaveBeenCalled();
    jest.clearAllMocks();
  });
  test("User Form Submission Detection", async () => {
    const addProductFormProps = buildAddProductFormProps();
    addProductFormProps.handleAddProductForm.mockImplementation((e) => {
      e.preventDefault();
    });
    render(<AddProductForm {...addProductFormProps} />);
    const user = userEvent.setup();
    const submitFormElement = screen.getByRole("button", { name: /submit/i });
    await user.click(submitFormElement);
    expect(addProductFormProps.handleAddProductForm).toHaveBeenCalledTimes(1);
  });
});

// describe("Add Product Header", () => {
//   // test("Renders", () => {
//   //   render(<AddProductHeader />);
//   // });
// });
