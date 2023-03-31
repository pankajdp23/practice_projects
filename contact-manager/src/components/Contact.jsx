import React from "react";

const Contact = ({ phoneNumber, firstName, lastName }) => {
  return (
    <tr key={phoneNumber}>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{phoneNumber}</td>
    </tr>
  );
};

export default Contact;
