import React, { useState } from "react";

function App() {
  const [submittedName, setSubmittedName] = useState("");
  const [enteredName, setEnteredName] = useState("");

  function handleChange(e) {
    setEnteredName(e.target.value);
  }

  function handleSubmit(e) {
    setSubmittedName(enteredName);

    e.preventDefault();
  }

  return (
    <div className="container">
      <h1>Hello {submittedName}</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="What's your name?"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
