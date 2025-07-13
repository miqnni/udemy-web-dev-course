import React from "react";
import ReactDOM from "react-dom";

const firstName = "Mother";
const lastName = "Earth";
const luckyNumber = Math.floor(Math.random() * 32) + 1;

ReactDOM.render(
  <div>
    <h1>
      Hello {firstName} {lastName}!
    </h1>
    <p>Your lucky number is {luckyNumber}</p>
  </div>,
  document.getElementById("root")
);
