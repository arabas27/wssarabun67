import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./app/Layout";
import CreateDoc from "./app/document/CreateDoc";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <div>test</div>,
      },
      {
        path: "document",
        children: [
          {
            path: "create",
            element: <CreateDoc />,
          },
          {
            path: "search",
            element: <div>search</div>,
          },
        ],
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
