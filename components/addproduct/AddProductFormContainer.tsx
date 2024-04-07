import React, { useReducer, useCallback, ChangeEvent } from "react";

import { useProducts } from "../../hooks";

import { productReducer } from "./reducer";

import {
  PRODUCT_REDUCER_ACTIONS,
  EventIDActionsType,
  PRODUCT_ADDITION_FAILURE_MESSAGE,
  PRODUCT_ADDITION_SUCCESS_MESSAGE,
} from "./constants";

import { addProductFormValidation, initializeProduct } from "./helper";
import { AddProductForm } from "./AddProductForm";

export const AddProductFormContainer = () => {
  const [products, setProducts] = useProducts();

  const [product, dispatch] = useReducer(productReducer, {}, initializeProduct);
  const handleAddProductForm = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      if (addProductFormValidation(product)) {
        setProducts([...products, product]);
        dispatch({ type: PRODUCT_REDUCER_ACTIONS.RESET_STATE });
        alert(PRODUCT_ADDITION_SUCCESS_MESSAGE);
      } else {
        alert(PRODUCT_ADDITION_FAILURE_MESSAGE);
      }
    },
    [products, product]
  );

  const handleFormElementChange = useCallback(
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const payload = event.target.value;
      const id = event.target.id;
      const type: string = EventIDActionsType.get(id)!;
      dispatch({ type, payload });
    },
    [dispatch]
  );
  return (
    <AddProductForm
      handleAddProductForm={handleAddProductForm}
      handleFormElementChange={handleFormElementChange}
      product={product}
    />
  );
};
