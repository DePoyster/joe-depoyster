//Joe DePoyster
//Final Project, COSC 4210

import React from "react";
import {hydrateRoot } from "react-dom/client";
import App from "./components/App";
import data from "./data/resdata.json";
import ErrorPage from "./ErrorPage";
import AppAbout from "./components/AppAbout";
import AppContact from "./components/AppContact"
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App resdata={data} />,
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