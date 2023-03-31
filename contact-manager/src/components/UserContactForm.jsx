import React, { useState } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
};
const UserContactForm = ({ addContact, contacts }) => {
  const [errorMsg, setErrorMsg] = useState("");
  const [contact, setContact] = useState(initialState);
  const { firstName, lastName, phoneNumber } = contact;

  const handleSubmit = (event) => {
    event.preventDefault();
    const allFieldsEntered = Object.keys(contact).every(
      (key) => contact[key].trim() !== ""
    );
    if (allFieldsEntered) {
      const contactExist = contacts?.find(
        (contactItem) => contactItem.phoneNumber === contact.phoneNumber
      );
      if (contactExist) {
        return setErrorMsg("Phone number already taken");
      }

      const validPhoneNumber = contact.phoneNumber.match(/^\d{10}$/g);
      if (validPhoneNumber) {
        setErrorMsg("");
        addContact(contact);
        setContact(initialState);
      } else {
        setErrorMsg("Please enter a valid 10 digit phone number.");
      }
    } else {
      setErrorMsg("Please enter all the values.");
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {errorMsg && <p className="error-msg">{errorMsg}</p>}
        <label>First Name</label>
        <input
          type="text"
          onChange={handleChange}
          value={firstName}
          name="firstName"
        />
        <label>Last Name</label>
        <input
          type="text"
          onChange={handleChange}
          value={lastName}
          name="lastName"
        />
        <label>Phone Number</label>
        <input
          type="number"
          onChange={handleChange}
          value={phoneNumber}
          name="phoneNumber"
        />
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
};

export default UserContactForm;
