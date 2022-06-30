import React, { useState } from "react";
// import ReactDOM from "react-dom";

export default function AddPersonForm() {
  const [person, setPerson] = useState("");

  function handleChange(e) {
    setPerson(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add new contact"
        onChange={handleChange}
        value={person.name}
      />
      <button type="submit">Add</button>
    </form>
  );
}