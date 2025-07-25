import React from "react";
import Login from "./Login";

const isLoggedIn = false;
const currentTime = new Date().getHours();
// const currentTime = 23;
// const currentTime = 1;

function App() {
  return (
    <div className="container">
      {isLoggedIn ? (
        currentTime < 18 && currentTime > 3 ? (
          <h1>Hello</h1>
        ) : (
          <div>
            <h1>Good evening</h1>
            {/* CONDITIONAL RENDERING WITH AND OPERATOR */}
            {currentTime < 3 && <p>It is so late already!</p>}
          </div>
        )
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
