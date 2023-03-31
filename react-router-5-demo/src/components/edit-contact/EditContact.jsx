import React from "react";
import { Navigate, useParams } from "react-router-dom";
import UserContactForm from "../contact-form/ContactForm";

const EditContact = ({ updateContact, contacts }) => {
  const { id } = useParams();

  const contactToEdit = contacts.find((contact) => contact.id === +id);

  if (!contactToEdit) {
    return <Navigate to="/" />;
  }
  console.log("contactToEdit", contactToEdit);

  const handleSubmit = (id, contact) => {
    updateContact(id, contact);
  };
  return (
    <div>
      <UserContactForm
        handleSubmit={handleSubmit}
        contactToEdit={contactToEdit}
      />
    </div>
  );
};

export default EditContact;
