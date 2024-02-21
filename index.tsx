import React from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routerConfig";

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
