import React from "react";
import Footer from "../components/Footer";
import Heroimage2 from "../components/Heroimage2";
import Navbar from "../components/Navbar";
import AboutContent from "./AboutContent";

const About = () => {
  return (
    <>
      <Navbar />
      <Heroimage2 heading="ABOUT" text="I m a MERN Stack DEvelOper." />
      <AboutContent/>
      <Footer />
    </>
  );
};

export default About;
