//Joe DePoyster
//Final Project, COSC 4210

import React from "react";
import {hydrateRoot } from "react-dom/client";
import App from "./components/App";
import data from "./data/resdata.json";

hydrateRoot(
  document.getElementById('root'),
  <App resdata={data}/>
  );