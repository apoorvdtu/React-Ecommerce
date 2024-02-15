import { createBrowserRouter } from "react-router-dom";

import AddProduct from "./pages/AddProduct";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import App from "./App";

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
    element: <ErrorPage />,
  },
};
export const routerConfig = [
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: routerLinks.HOME.path,
        element: routerLinks.HOME.element,
      },
      {
        path: routerLinks.ADD_PRODUCT.path,
        element: routerLinks.ADD_PRODUCT.element,
      },
      {
        path: routerLinks.HOME.path,
        element: routerLinks.HOME.element,
      },
    ],
  },
];
export const router = createBrowserRouter(routerConfig);
