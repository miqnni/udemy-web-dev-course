import React from "react";
import ReactDOM from "react-dom";
import randomNameForDefaultExport, { doublePi, triplePi } from "./math.js";
import * as pi from "./math.js";

ReactDOM.render(
    <ul>
        <li>{randomNameForDefaultExport}</li>
        <li>{doublePi()}</li>
        <li>{triplePi()}</li>
        <li>{pi.default}</li>
        <li>{pi.doublePi()}</li>
        <li>{pi.triplePi()}</li>
    </ul>,
    document.getElementById("root")
);
