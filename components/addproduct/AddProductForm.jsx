import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import { useReducer, useCallback } from "react";
import { useLocalStorageHook } from "../utilities/constant";

import { Product } from "../utilities/Product";

import {
  PRODUCTS_DEFAULT_INITIAL_VALUE,
  PRODUCTS_LOCAL_STORAGE_KEY,
  PRODUCT_ADDITION_FAILURE_MESSAGE,
  PRODUCT_ADDITION_SUCCESS_MESSAGE,
} from "../utilities/constant";

const ACTIONS = {
  CHANGE_PRODUCT_NAME: "CHANGE_PRODUCT_NAME",
  CHANGE_PRODUCT_CATEGORY: "CHANGE_PRODUCT_CATEGORY",
  CHANGE_PRODUCT_ORIGINAL_PRICE: "CHANGE_PRODUCT_ORIGINAL_PRICE",
  CHANGE_PRODUCT_DISCOUNT_PRICE: "CHANGE_PRODUCT_DISCOUNT_PRICE",
  CHANGE_PRODUCT_STOCK_UNITS: "CHANGE_PRODUCT_STOCK_UNITS",
  INITIALIZE_NEW_PRODUCT: "INITIALIZE_NEW_PRODUCT",
};

function productReducer(state, action) {
  switch (action.type) {
    case ACTIONS.CHANGE_PRODUCT_NAME:
      return { ...state, productName: action.payload };
    case ACTIONS.CHANGE_PRODUCT_CATEGORY:
      return { ...state, productCategory: action.payload };
    case ACTIONS.CHANGE_PRODUCT_ORIGINAL_PRICE:
      return { ...state, productOriginalPrice: +action.payload };
    case ACTIONS.CHANGE_PRODUCT_DISCOUNT_PRICE:
      return { ...state, productDiscountPrice: +action.payload };
    case ACTIONS.CHANGE_PRODUCT_STOCK_UNITS:
      return { ...state, productStockUnits: +action.payload };
    case ACTIONS.INITIALIZE_NEW_PRODUCT:
      return initializeProduct();
    default:
      return state;
  }
}

const initializeProduct = () => {
  return new Product();
};

const addProductFormValidation = (product) => {
  const { productName, productOriginalPrice, productDiscountPrice, productStockUnits } = product;
  return (
    productName.trim().length !== 0 &&
    !Number.isNaN(+productOriginalPrice) &&
    !Number.isNaN(+productDiscountPrice) &&
    !Number.isNaN(+productStockUnits)
  );
};

function AddProductForm() {
  const [products, setProducts] = useLocalStorageHook(
    PRODUCTS_LOCAL_STORAGE_KEY,
    PRODUCTS_DEFAULT_INITIAL_VALUE
  );

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
        dispatch({ type: ACTIONS.INITIALIZE_NEW_PRODUCT });
        alert(PRODUCT_ADDITION_SUCCESS_MESSAGE);
      } else {
        alert(PRODUCT_ADDITION_FAILURE_MESSAGE);
      }
    },
    [products, product]
  );

  const handleOnChangeProductName = useCallback((event) => {
    dispatch({ type: ACTIONS.CHANGE_PRODUCT_NAME, payload: event.target.value });
  }, []);

  const handleOnChangeProductOriginalPrice = useCallback((event) => {
    dispatch({ type: ACTIONS.CHANGE_PRODUCT_ORIGINAL_PRICE, payload: event.target.value });
  }, []);

  const handleOnChangeProductDiscountPrice = useCallback((event) => {
    dispatch({ type: ACTIONS.CHANGE_PRODUCT_DISCOUNT_PRICE, payload: event.target.value });
  }, []);

  const handleOnChangeProductStockUnits = useCallback((event) => {
    dispatch({ type: ACTIONS.CHANGE_PRODUCT_STOCK_UNITS, payload: event.target.value });
  }, []);

  const handleOnChangeProductCategory = useCallback((event) => {
    dispatch({ type: ACTIONS.CHANGE_PRODUCT_CATEGORY, payload: event.target.value });
  }, []);

  return (
    <Form onSubmit={handleAddProductForm}>
      <Form.Group className="mb-3" controlId="productName" aria-label="Product Name">
        <Form.Label>Product Name</Form.Label>
        <Form.Control
          onChange={handleOnChangeProductName}
          value={productName}
          type="text"
          placeholder="Enter Product Name"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="productCategory" aria-label="Product Category">
        <Form.Label>Product Category</Form.Label>
        <Form.Select value={productCategory} onChange={handleOnChangeProductCategory} required>
          <option value="mobiles">Mobiles</option>
          <option value="tvs">TVs</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="productOriginalPrice">
        <Form.Label>Product Original Price</Form.Label>
        <Form.Control
          value={productOriginalPrice}
          onChange={handleOnChangeProductOriginalPrice}
          required
          type="number"
          placeholder="Enter Product Original Price"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="productDiscountPrice">
        <Form.Label>Product Discount Price</Form.Label>
        <Form.Control
          value={productDiscountPrice}
          onChange={handleOnChangeProductDiscountPrice}
          required
          type="number"
          placeholder="Enter Product Discount Price"
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="productStockUnits">
        <Form.Label>Product Stock Units</Form.Label>
        <Form.Control
          value={productStockUnits}
          onChange={handleOnChangeProductStockUnits}
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
