//Create a react app from scratch.
//It should display 2 paragraph HTML elements.
//The paragraphs should say:
//Created by YOURNAME.
//Copyright CURRENTYEAR.

import React from "react";
import ReactDOM from "react-dom";

name = "Mark Reptile";
currentYear = new Date(Date.now()).getFullYear();

ReactDOM.render(
  <div>
    <p>Created by {name}.</p>
    <p>Copyright {currentYear}.</p>
  </div>,
  document.getElementById("root")
);
