import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useReducer, useCallback } from "react";
import { useProducts } from "../../hooks/useProducts.js";
import { productReducer } from "./reducer.js";

import { addProductFormValidation, initializeProduct } from "./helper.js";

import {
  ACTIONS,
  EventIDActionsType,
  PRODUCT_ADDITION_FAILURE_MESSAGE,
  PRODUCT_ADDITION_SUCCESS_MESSAGE,
  PRODUCT_CATEGORY_OPTIONS,
  PRODUCT_FORM_IDS,
} from "./constants.js";

function AddProductForm() {
  const [products, setProducts] = useProducts();

  const [product, dispatch] = useReducer(productReducer, {}, initializeProduct);

  const {
    productName,
    productOriginalPrice,
    productDiscountPrice,
    productCategory,
    productStockUnits,
  } = product;

  const handleAddProductForm = useCallback(
    (event) => {
      event.preventDefault();
      if (addProductFormValidation(product)) {
        setProducts([...products, product]);
        dispatch({ type: ACTIONS.RESET_STATE });
        alert(PRODUCT_ADDITION_SUCCESS_MESSAGE);
      } else {
        alert(PRODUCT_ADDITION_FAILURE_MESSAGE);
      }
    },
    [products, product]
  );

  const handleFormElementChange = useCallback(
    (event) => {
      const payload = event.target.value;
      const id = event.target.id;
      const type = EventIDActionsType.get(id);
      dispatch({ type, payload });
    },
    [dispatch]
  );

  return (
    <Form onSubmit={handleAddProductForm}>
      <Form.Group
        className="mb-3"
        controlId={PRODUCT_FORM_IDS.productName}
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
        controlId={PRODUCT_FORM_IDS.productCategory}
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
      <Form.Group className="mb-3" controlId={PRODUCT_FORM_IDS.productOriginalPrice}>
        <Form.Label>Product Original Price</Form.Label>
        <Form.Control
          value={productOriginalPrice}
          onChange={handleFormElementChange}
          required
          type="number"
          placeholder="Enter Product Original Price"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId={PRODUCT_FORM_IDS.productDiscountPrice}>
        <Form.Label>Product Discount Price</Form.Label>
        <Form.Control
          value={productDiscountPrice}
          onChange={handleFormElementChange}
          required
          type="number"
          placeholder="Enter Product Discount Price"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId={PRODUCT_FORM_IDS.productStockUnits}>
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
}

export default AddProductForm;
