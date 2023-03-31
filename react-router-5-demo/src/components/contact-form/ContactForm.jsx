import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

const initialState = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
};

const UserContactForm = (props) => {
  //console.log(props);
  const navigate = useNavigate();
  const { state = {} } = useLocation();
  const { addContact, contactToEdit, handleSubmit, contacts } = props;
  const { id, firstName, lastName, phoneNumber } = contactToEdit || {};
  const [contact, setContact] = useState({
    firstName: firstName ? firstName : "",
    lastName: lastName ? lastName : "",
    phoneNumber: phoneNumber ? phoneNumber : "",
  });
  const [errorMsg, setErrorMsg] = useState("");

  const isEditMode = firstName !== undefined;

  const onHandleChange = (event) => {
    const { name, value } = event.target;
    console.log(name, value);
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const allFieldsEntered = Object.keys(contact).every(
      (key) => contact[key].trim() !== ""
    );
    if (allFieldsEntered) {
      const contactExist = contacts?.find(
        (contactItem) => contactItem.phoneNumber === contact.phoneNumber
      );
      if (contactExist) {
        return setErrorMsg("Phone number already taken.");
      }

      const validPhoneNumber = contact.phoneNumber.match(/^\d{10}$/g);
      if (validPhoneNumber) {
        setErrorMsg("");
        if (isEditMode) {
          handleSubmit(id, contact);
        } else {
          addContact({
            ...contact,
            id: Date.now(),
          });
        }
        setContact(initialState);
       navigate("/");
      } else {
        setErrorMsg("Please enter a valid 10 digit phone number.");
      }
    } else {
      setErrorMsg("Please enter all the values.");
    }
  };

  return (
    <div className="contact-form">
      <Form onSubmit={handleFormSubmit}>
        {errorMsg && <p className="error-msg">{errorMsg}</p>}

        <Form.Group className="mb-3" controlId="firstName">
          <Form.Label className="icon">First Name</Form.Label>
          <Form.Control
            name="firstName"
            value={contact.firstName}
            type="text"
            onChange={onHandleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="lastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            name="lastName"
            value={contact.lastName}
            type="text"
            onChange={onHandleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="phoneNumber">
          <Form.Label>Contact</Form.Label>
          <Form.Control
            name="phoneNumber"
            value={contact.phoneNumber}
            type="number"
            onChange={onHandleChange}
          />
        </Form.Group>
        <Button type="submit" variant="primary">
          {isEditMode ? "Update Contact" : "Add Contact"}
        </Button>
      </Form>
    </div>
  );
};

export default UserContactForm;
