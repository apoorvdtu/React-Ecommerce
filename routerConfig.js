import React from "react";

import { createBrowserRouter } from "react-router-dom";

import { Home, ErrorPage, AddProduct, Cart } from "./pages";
import { App } from "./App";

// const AddProduct = lazy(() =>
//   import("./pages/AddProduct").then((module) => ({ default: module.AddProduct }))
// );
// const AddProduct = lazy(() => import("./pages/AddProduct"));
// const ErrorPage = lazy(() => import("./pages/ErrorPage"));
// import { lazy } from "react";

export const routerLinks = {
  ADD_PRODUCT: {
    path: "/addproduct",
    element: <AddProduct />,
  },
  HOME: {
    path: "/",
    element: <Home />,
  },
  CART: {
    path: "/cart",
    element: <Cart />,
  },
};

export const routerConfig = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [...Object.values(routerLinks)],
  },
];

export const router = createBrowserRouter(routerConfig);
