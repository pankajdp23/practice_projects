import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ContactForm from "./components/contact-form/ContactForm";
import EditContact from "./components/edit-contact/EditContact";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import PageNotFound from "./components/not-found/PageNotFound";

function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem("contacts")) || []
  );

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const updateContact = (id, updatedContact) => {
    console.log(id, updatedContact);
    setContacts(
      contacts.map((contact) => {
        if (contact.id === id) {
          return { ...contact, ...updatedContact };
        }
        return contact;
      })
    );
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id))
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
      <BrowserRouter>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={<Home  contacts={contacts}
              deleteContact={deleteContact} />}
              exact
            />
            <Route
              path="/addContact"
              element={
                <ContactForm
                  addContact={addContact}
                  updateContact={updateContact}
                />
              }
            />
            <Route
              path="/edit/:id" // URL parameters
              element={
                <EditContact
                  updateContact={updateContact}
                  contacts={contacts}
                />
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
