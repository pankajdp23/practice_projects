import React from "react";
import Contact from "./Contact";

const ContactsList = (props) => {
  const { contacts } = props;
  return (
    <table border="1">
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {contacts?.map((contact) => {
          const { firstName, lastName, phoneNumber } = contact;
          return <Contact key={phoneNumber} {...contact} />;
        })}
      </tbody>
    </table>
  );
};

export default ContactsList;
