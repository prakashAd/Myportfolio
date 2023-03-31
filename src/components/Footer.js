import React from "react";
import {
  FaFacebook,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>123 Housing Society</p>
              <p>Kathmandu</p>
            </div>

          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              +9779841728246
            </h4>
          </div>
        <div className="email">
          <h4>
            <FaMailBulk
              size={20}
              style={{ color: "#fff", marginRight: "2rem" }}
            />
            info@email.com
          </h4>
        </div>

        <div className="right">
          <h4>About the Company</h4>
          <p>This is a Prakash Adhikari,CEO of Dark ELixir .Inc</p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />

            <FaInstagram
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />

            <FaLinkedin
              size={30}
              style={{ color: "#fff", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Footer;
