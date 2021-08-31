import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo3.png";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer">
          <ul className="ul-list">
            <li>
              <NavLink to="/TnC">Terms {'&'} Conditions</NavLink>
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
              <NavLink to="#">Join Us</NavLink>
            </li>
            <li>
              <NavLink to="/Feedback">Feedback</NavLink>
            </li>
          </ul>
        </div>
        <div className="container__footer">
          <div className="content__footer">
            <img src={logo} alt="logo" />
          </div>
          <span className="vertical-line__footer"></span>
          <div className="footer__div">
            <p className="footer__para">
              Website Content Managed by Web team of Crime Free Bharat ! <br />
              Designed, Developed and Hosted by Crime Free Bharat
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
