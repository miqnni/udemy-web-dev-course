import React, { useState } from "react";

//CHALLENGE: Make the code in App.jsx work.
//The final app should have a single contact
//with fName, lName and email.

//HINT: You'll need to apply the following things you learnt:
//1. Using JS Objects with state.
//2. Making use of previous state when changing state.
//3. Working with forms in React.
//4. Handing events

function App() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(e) {
    const { value, name } = e.target;

    // setContact((prevContact) => {
    //   switch (name) {
    //     case "fName":
    //       return { ...prevContact, fName: value };
    //     case "lName":
    //       return { ...prevContact, lName: value };
    //     case "email":
    //       return { ...prevContact, email: value };
    //     default:
    //       throw new Error("Unsupported input name");
    //   }
    // });

    setContact((prevContact) => ({ ...prevContact, [name]: value }));

    e.preventDefault();
  }

  function handleSubmit(e) {
    alert(
      `Hello, ${contact.fName} ${contact.lName},
whose email is ${contact.email}`
    );
    e.preventDefault();
  }

  return (
    <div className="container">
      <h1>
        Hello {contact.fName} {contact.lName}
      </h1>
      <p>{contact.email}</p>
      <form onSubmit={handleSubmit}>
        <input
          name="fName"
          value={contact.fName}
          placeholder="First Name"
          onChange={handleChange}
        />
        <input
          name="lName"
          value={contact.lName}
          placeholder="Last Name"
          onChange={handleChange}
        />
        <input
          name="email"
          value={contact.email}
          placeholder="Email"
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
