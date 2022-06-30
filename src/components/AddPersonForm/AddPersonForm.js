import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function AddPersonForm(props) {
  const [person, setPerson] = useState("");

  function handleChange(e) {
    setPerson(e.target.value);
  }

  function handleSubmit(e) {
    props.handleSubmit(person);
    setPerson("");
    e.preventDefault();
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Control
        type="text"
        placeholder="Add new contact"
        onChange={handleChange}
        value={person}
      />
      <Button type="submit">Add</Button>
    </Form>
  );
}
