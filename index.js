import path from "path";
import fs from "fs";
import React from "react";
import ReactDOMServer from "react-dom/server";
import express from "express";
import App from "./src/components/App.js";

const PORT = process.env.PORT || 8080;
const app = express();

app.set('view engine', 'react');
app.use(express.static('public'));

app.get("/*", (req, res) => {
  const app = ReactDOMServer.renderToString(
    <App />
  );
  
  const indexFile = path.resolve(
    "./dist/index.html"
  );

   fs.readFile(indexFile, "utf8", (err, data) => {
     return res.send(
       data.replace(
         '<div id="root"></div>',
         `<div id="root">${app}</div>`
       )
     );
   });
});

app.listen(PORT, () =>
  console.log(
    `Server is listening on port ${PORT}`
  )
);
