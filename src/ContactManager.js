import React, { useState } from "react";
import "./App.css";
import AddPersonForm from "./components/AddPersonForm/AddPersonForm";
import PeopleList from "./components/PeopleList/PeopleList";

function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);

  function addPerson(name) {
    setContacts([...contacts, name]);
  }

  return (
    <div>
      <h1>Contact Manager</h1>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} />
    </div>
  );
}

export default ContactManager;
