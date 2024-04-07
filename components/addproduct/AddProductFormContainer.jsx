import { useReducer, useCallback } from "react";
import { useProducts } from "../../hooks/useProducts.js";
import { productReducer } from "./reducer.js";

import {
  ACTIONS,
  EventIDActionsType,
  PRODUCT_ADDITION_FAILURE_MESSAGE,
  PRODUCT_ADDITION_SUCCESS_MESSAGE,
} from "./constants.js";

import { addProductFormValidation, initializeProduct } from "./helper.js";
import { AddProductForm } from "./AddProductForm.jsx";

export const AddProductFormContainer = () => {
  const [products, setProducts] = useProducts();

  const [product, dispatch] = useReducer(productReducer, {}, initializeProduct);

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
    <AddProductForm
      handleAddProductForm={handleAddProductForm}
      handleFormElementChange={handleFormElementChange}
      product={product}
    />
  );
};
