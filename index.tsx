import React from "react";

import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./routerConfig";

import "bootstrap/dist/css/bootstrap.min.css";

const rootHTMLELEMENT = document.getElementById("root");
if (!rootHTMLELEMENT) {
  throw "No Root Element Present in HTML";
}

const root = createRoot(rootHTMLELEMENT);
root.render(<RouterProvider router={router} />);
