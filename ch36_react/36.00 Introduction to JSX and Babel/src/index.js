// OLD
// var React = require("react");
// var ReactDOM = require("react-dom");

// NEW
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <div>
    <h1>Oh, hello!</h1>
    <p>Sample text</p>
  </div>, // What to show (a SINGLE element)
  document.getElementById("root") // Where to show it
  // (Optional callback)
);
