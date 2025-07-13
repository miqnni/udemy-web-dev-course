import React from "react";
import ReactDOM from "react-dom";

const customStyle = {
    color: "red",
    fontSize: "2rem",
    border: "1px solid black",
};

customStyle.color = "blue";

ReactDOM.render(
    // <h1 style={{ color: "red" }}>Hello World!</h1>,
    <h1 style={customStyle}>Hello World!</h1>,
    document.getElementById("root")
);
