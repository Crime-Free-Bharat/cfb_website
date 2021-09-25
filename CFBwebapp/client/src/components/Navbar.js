import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import logo from "../img/logo2.png";
const Navbar = () => {
  return (
    <>
      <header>
        <div className="nav1">
          <p>
            DEPARTMENT OF THE NATIONAL TECHNICAL RESEARCH {'&'} DEVELOPMENT
            COMMITTEE
          </p>

          <div className="nav1-right">
            <div className="navsocial">
              <NavLink
                to="https://twitter.com/bharat_free?s=20"
                target="_blank"
              >
                <i className="bi bi-twitter"></i>
              </NavLink>
              <NavLink
                to="https://www.instagram.com/crimefreebharat_official/"
                target="_blank"
              >
                <i className="bi bi-instagram"></i>
              </NavLink>
              <NavLink
                to="https://www.linkedin.com/company/crimefreebharat/mycompany/"
                target="_blank"
              >
                <i className="bi bi-linkedin"></i>
              </NavLink>
              <NavLink
                to="https://www.youtube.com/channel/UCAmspcG5fQmPgi1LxBprpRg"
                target="_blank"
              >
                <i className="bi bi-youtube"></i>
              </NavLink>
            </div>
            <NavLink to="#">
              <div className="nav1lang">language</div>
            </NavLink>
            <NavLink to="/signup">
              <div className="nav1login">Login / Signup</div>
            </NavLink>
          </div>
        </div>

        <div className="nav2 main">
          <NavLink to="#">
            <img src={logo} alt="logo_crime_free_bharat" />
          </NavLink>

          <div className="menu">
            <NavLink to="/about">
              <div className="about nav__items">
                <i className="bi bi-person-lines-fill"></i>
                <br />
                <p>About us</p>
              </div>
            </NavLink>
            <NavLink to="/services">
              <div className="service nav__items">
                <i className="bi bi-gear-wide-connected"></i> <br />
                <p>Services</p>
              </div>
            </NavLink>
            <NavLink to="#">
              <div className="division nav__items">
                <i className="bi bi-diagram-3"></i>
                <br />
                <p>CFB division</p>
              </div>
            </NavLink>
            <NavLink to="/anr">
              <div className="act nav__items">
                <i className="bi bi-file-earmark-ruled"></i> <br />
                <p>Act and Regulations</p>
              </div>
            </NavLink>
            <NavLink to="/report">
              <div className="report nav__items">
                <i className="bi bi-flag"></i> <br /> <p>Report a Crime</p>
              </div>
            </NavLink>
            <NavLink to="/media">
              <div className="media nav__items">
                <i className="bi bi-soundwave"></i> <br /> <p>Media</p>
              </div>
            </NavLink>
            <NavLink to="/activity">
              <div className="activity nav__items">
                <i className="bi bi-hand-index-thumb"></i>
                <br /> <p>CFB Activities</p>
              </div>
            </NavLink>
            <NavLink to="/contact">
              <div className="contact nav__items">
                <i className="bi bi-telephone-plus"></i>
                <br />
                <p>Contact Us</p>
              </div>
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
