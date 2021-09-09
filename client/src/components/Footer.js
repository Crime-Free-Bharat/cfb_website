import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo3.png";
const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer1">
          <div className="ul">
            <ul>
              <li>
                <NavLink to="/TnC">Terms & Conditions</NavLink>
              </li>
              <li>
                <NavLink to="/FAQ">FAQ</NavLink>
              </li>
              <li>
                <NavLink to="/Policies">Policies</NavLink>
              </li>
              <li>
                <NavLink to="/RTI">RTI</NavLink>
              </li>
              <li>
                <NavLink to="#">Help</NavLink>
              </li>
              <li>
                <NavLink to="#">Join Us</NavLink>
              </li>
              <li className="libg">
                <NavLink to="/feedback">Feedback</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="container">
          <div className="content">
            <img src={logo} alt="logo" />
          </div>
          <span className="vertical-line"></span>
          <div>
            <p>
              Web Content Developed and Managed by National Technical Research &
              Development Committee, Crime Free Bharat
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
