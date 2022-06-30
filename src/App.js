import "./App.css";
import AddPersonForm from "./components/AddPersonForm/AddPersonForm";
import PeopleList from "./components/PersonList/PersonList";

const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne"];

function App() {
  return (
    <div>
      <h1>Contact Manager</h1>
      <AddPersonForm />
      <PeopleList data={contacts} />
    </div>
  );
}

export default App;
