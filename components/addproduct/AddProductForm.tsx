import React from "react";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { PRODUCT_CATEGORY_OPTIONS, PRODUCT_FORM_IDS } from "./constants";
import { Product } from "../../types";

interface AddProductFormProps {
  product: Product;
  handleAddProductForm: (event: React.FormEvent<HTMLFormElement>) => void;
  handleFormElementChange: (event: React.ChangeEvent) => void;
}

export const AddProductForm = ({
  product,
  handleAddProductForm,
  handleFormElementChange,
}: AddProductFormProps) => {
  const {
    productName,
    productOriginalPrice,
    productDiscountPrice,
    productCategory,
    productStockUnits,
  } = product;
  return (
    <Form onSubmit={handleAddProductForm}>
      <Form.Group
        className="mb-3"
        controlId={PRODUCT_FORM_IDS.PRODUCT_NAME}
        aria-label="Product Name"
      >
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          onChange={handleFormElementChange}
          value={productName}
          type="text"
          placeholder="Enter Product Name"
        />
      </Form.Group>
      <Form.Group
        className="mb-3"
        controlId={PRODUCT_FORM_IDS.PRODUCT_CATEGORY}
        aria-label="Product Category"
      >
        <Form.Label>Product Category</Form.Label>
        <Form.Select value={productCategory} onChange={handleFormElementChange} required>
          {PRODUCT_CATEGORY_OPTIONS.map(({ label, value }) => {
            return (
              <option key={value} value={value}>
                {label}
              </option>
            );
          })}
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId={PRODUCT_FORM_IDS.PRODUCT_ORIGINAL_PRICE}>
        <Form.Label>Product Original Price</Form.Label>
        <Form.Control
          value={productOriginalPrice}
          onChange={handleFormElementChange}
          required
          type="number"
          placeholder="Enter Product Original Price"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId={PRODUCT_FORM_IDS.PRODUCT_DISCOUNT_PRICE}>
        <Form.Label>Product Discount Price</Form.Label>
        <Form.Control
          value={productDiscountPrice}
          onChange={handleFormElementChange}
          required
          type="number"
          placeholder="Enter Product Discount Price"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId={PRODUCT_FORM_IDS.PRODUCT_STOCK_UNITS}>
        <Form.Label>Product Stock Units</Form.Label>
        <Form.Control
          value={productStockUnits}
          onChange={handleFormElementChange}
          required
          type="number"
          placeholder="Enter Product Stock Units"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
