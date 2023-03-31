import "./Heroimage.css";
import React from "react";
import IntroImg from "../assets/code-wallpaper-5.png";
import { Link } from "react-router-dom";

const Heroimage = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img" src={IntroImg} alt="IntroImg"></img>
      </div>
      <div className="content">
        <p>Hello Everyone,I'am Prakash Adhikari , a Freelancer,</p>
        <h1>MERN Stack Developer</h1>
        <Link to="/project" className="btn">
          Projects
        </Link>
        <Link to="/contact" className="btn btn-light">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Heroimage;
