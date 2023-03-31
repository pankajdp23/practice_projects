import React, { useState, useEffect } from "react";
import "./App.css";
import ContactsList from "./components/ContactsList";
import UserContactForm from "./components/UserContactForm";

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) || []
  );

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  useEffect(() => {
    try {
      localStorage.setItem("contacts", JSON.stringify(contacts));
    } catch (error) {
      console.log(error);
    }
  }, [contacts]);

  console.log(contacts);
  return (
    <div className="App">
      <UserContactForm addContact={addContact} contacts={contacts} />
      {contacts?.length > 0 && <ContactsList contacts={contacts} />}
    </div>
  );
}

export default App;
