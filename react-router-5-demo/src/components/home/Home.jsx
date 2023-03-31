import React from "react";
import { Table } from "react-bootstrap";
import Contact from "../contact/Contact";
import "./home.css";

const ContactsList = (props) => {
  const { contacts, deleteContact } = props;

  if (contacts?.length === 0) {
    return <h3>No contacts found. Please add one.</h3>;
  }
  return (
    <Table
      border="1"
      striped
      bordered
      hover
      responsive
      //style={{ marginTop: '10px'}}
      className="contacts-list"
    >
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {contacts?.map((contact) => {
          const { id, firstName, lastName, phoneNumber } = contact;
          return (
            <Contact
              key={id}
              {...contact}
              deleteContact={deleteContact}
              /* firstName={firstName}
              lastName={lastName}
              phoneNumber={phoneNumber}*/
            />
          );
        })}
      </tbody>
    </Table>
  );
};

export default ContactsList;
