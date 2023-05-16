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
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={50} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>Balaju-16</p>
              <p>Kathmandu</p>
            </div>

            <div className="phone">
              <h4>
                <FaPhone
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                +977 9841728246
              </h4>
            </div>
            <div className="email">
              <h4>
                <FaMailBulk
                  size={20}
                  style={{ color: "#fff", marginRight: "2rem" }}
                />
                adhikariprakash992@gmail.com
              </h4>
            </div>

            <div className="right">
              <h4>About the Company</h4>
              <p>Established in 2023</p>
              <div className="social">
                <Link>
                  <FaFacebook
                    to="https://www.facebook.com/pebbles.adhik"
                    size={30}
                    style={{ color: "#fff", marginRight: "1rem" }}
                  />
                </Link>
                <FaInstagram
                  size={30}
                  style={{ color: "#fff", marginRight: "1rem" }}
                />

                <Link>
                  <FaLinkedin
                    size={30}
                    style={{ color: "#fff", marginRight: "1rem" }}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
