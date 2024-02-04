import React from "react";
import {hydrateRoot } from "react-dom/client";
import App from "./components/App";
import ErrorPage from "./ErrorPage";
import AppAbout from "./components/AppAbout";
import AppContact from "./components/AppContact"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage />,
  },
  {
    path: "about",
    element: <AppAbout />,
  },
  {
    path: "contact",
    element: <AppContact />,
  },
]);

hydrateRoot(
  document.getElementById('root'),
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  );