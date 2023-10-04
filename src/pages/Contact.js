import React from "react";
import Footer from "../components/Footer";
import Form from "../components/Form";
import Heroimage2 from "../components/Heroimage2";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <>
      <Navbar />
      <Heroimage2 heading="CONTACT" text="Let's Connect." />
      <Form />
      <Footer />
    </>
  );
};

//this is for testing

export default Contact;
