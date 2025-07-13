//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";

import ReactDOM from "react-dom";

const getDaytime = (currHour) => {
  if (currHour < 12) return "morning";
  if (currHour < 18) return "Afternoon";
  else return "evening";
};

const now = new Date();
const currTimeHour = now.getHours(); // 0 - 23

const daytime = getDaytime(currTimeHour);

const daytimeColour = {
  morning: "red",
  Afternoon: "green",
  evening: "blue",
};

ReactDOM.render(
  <div>
    <h1 className="heading" style={{ color: daytimeColour[daytime] }}>
      Good {daytime}
    </h1>
  </div>,
  document.getElementById("root")
);
