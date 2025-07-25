import React, { useState } from "react";

function App() {
  const [fullName, setFullName] = useState({
    firstName: "",
    lastName: "",
  });

  function handleChange(e) {
    const { value, name } = e.target;

    setFullName((prevFullName) => {
      if (name === "fName") return { ...prevFullName, firstName: value };
      else if (name === "lName") {
        return { ...prevFullName, lastName: value };
      }
    });

    e.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {fullName.firstName} {fullName.lastName}
      </h1>
      <form>
        <input name="fName" onChange={handleChange} placeholder="First Name" />
        <input name="lName" onChange={handleChange} placeholder="Last Name" />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
