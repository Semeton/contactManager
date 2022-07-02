import React, { useState } from "react";
import "./App.css";
import AddPersonForm from "./components/AddPersonForm/AddPersonForm";
import PeopleList from "./components/PeopleList/PeopleList";
import "bootstrap/dist/css/bootstrap.min.css";

function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);

  function addPerson(name) {
    setContacts([...contacts, name]);
  }
  // Git comment
  // Another Git comment

  return (
    <div className="container">
      <h1>Contact Manager</h1>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  );
}

export default ContactManager;
