//Joe DePoyster
//Final Project, COSC 4210
//entry point js file

import React from "react";
import {render} from "react-dom";
import App from "../components/App";
import data from "./data/resdata.json"
render(<App resdata={data}/>, document.getElementById("root"))
