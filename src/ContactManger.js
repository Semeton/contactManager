import React, { useState } from 'react';
import "./App.css";
import AddPersonForm from "./components/AddPersonForm/AddPersonForm";
import PeopleList from "./components/PeopleList/PeopleList";

const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];

function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);
  return (
    <div>
      <h1>Contact Manager</h1>
      <AddPersonForm />
      <PeopleList data={contacts} />
    </div>
  );
}

export default ContactManager;
