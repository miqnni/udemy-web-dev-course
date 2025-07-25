import React, { useState, useEffect } from "react";
import TimeDisplay from "./TimeDisplay";
import TimeButton from "./TimeButton";

function App() {
  const [time, setTime] = useState("TIME");
  const [intervalStarted, setIntervalStarted] = useState(false);

  // USE EFFECT - start

  useEffect(() => {
    let timerId;

    if (intervalStarted) {
      timerId = setInterval(() => {
        setTime(new Date().toLocaleTimeString());
      }, 1000);
    }

    return () => {
      if (timerId) clearInterval(timerId);
    };
  });

  // USE EFFECT - end

  function updateTime() {
    setTime(new Date().toLocaleTimeString());
    setIntervalStarted(true);
  }

  return (
    <div className="container">
      <TimeDisplay currTime={time} />
      <TimeButton onClick={updateTime} />
    </div>
  );
}

export default App;
