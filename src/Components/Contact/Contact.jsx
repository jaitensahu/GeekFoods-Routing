import React from "react";
import Header from "../Home/Header";
import ContactDetails from "./Contact/ContactDetails";
import Form from "./Form/Form";
import './Contact.css'

const Contact = () => {
  return (
    <>
      <Header />
      <div className="containerContact">
        <ContactDetails />
        <Form />
      </div>
    </>
  );
};

export default Contact;
