// CHALLENGE: uncomment the code below and see the car stats rendered
import React from "react";
import ReactDOM from "react-dom";
import cars from "./practice";

// My solution 1 - start
// const [honda, tesla] = cars;
// const { coloursByPopularity: hondaColours, speedStats: hondaSpeedStats } =
//   honda;
// const { coloursByPopularity: teslaColours, speedStats: teslaSpeedStats } =
//   tesla;
// const [hondaTopColour, hondaSecondaryColour] = hondaColours;
// const [teslaTopColour, teslaSecondaryColour] = teslaColours;
// const { topSpeed: hondaTopSpeed, zeroToSixty: hondaZeroToSixty } =
//   hondaSpeedStats;
// const { topSpeed: teslaTopSpeed, zeroToSixty: teslaZeroToSixty } =
//   teslaSpeedStats;
// My solution 1 - end

// My solution 2- start
const [honda, tesla] = cars;
const {
  coloursByPopularity: [hondaTopColour],
  speedStats: { topSpeed: hondaTopSpeed },
} = honda;
const {
  coloursByPopularity: [teslaTopColour],
  speedStats: { topSpeed: teslaTopSpeed },
} = tesla;
// My solution 2 - end

ReactDOM.render(
  <table>
    <thead>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
        <th>Top Colour</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColour}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColour}</td>
      </tr>
    </tbody>
  </table>,
  document.getElementById("root")
);
