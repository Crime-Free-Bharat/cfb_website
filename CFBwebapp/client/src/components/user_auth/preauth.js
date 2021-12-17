import React from "react";
import img from "../../img/user_auth.svg";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
window.myRole = "";
const handleClick = (e) => {
  window.myRole = e.target.id;
};
const Preauth = () => {
  return (
    <>
      <Navbar />
      <section className="prelogin">
        <div className="container">
          <h4 style={{ textAlign: "center", marginTop: "50px" }}>
            WELCOME TO MISSION CRIME FREE BHARAT
          </h4>
          <div className="prelogin-content">
            <div className="prelogin-form">
              <div className="vlpre" style={{ height: "300px" }}></div>
              <img
                src={img}
                className="img-responsive stctionimgpre"
                alt="preauth"
              />
            </div>
            <hr />
            <div className="prelogin-image" style={{ marginTop: "70px" }}>
              <NavLink
                to="/signup"
                className="fbpre btnpre"
                id="intern"
                onClick={(e) => handleClick(e)}
              >
                Continue as an Intern
              </NavLink>
              <br />
              <NavLink
                to="/signup"
                className="googlepre btnpre"
                id="member"
                onClick={(e) => handleClick(e)}
              >
                Continue as a Member
              </NavLink>
              <NavLink
                to="/signup"
                className="twitterpre btnpre"
                id="volunteer"
                onClick={(e) => handleClick(e)}
              >
                Continue as a Volunteer
              </NavLink>
            </div>
          </div>
          <h6 style={{ textAlign: "center", marginTop: "50px" }}>
            Already have an account?
            <button
              class="btnlogin"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Login
            </button>
          </h6>
        </div>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                 LOGIN
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-footer">
                <NavLink to="/login" class="btn"  id="intern"  onClick={(e) => handleClick(e)}>
                  Login as Intern

                </NavLink>
                <NavLink to="/login" class="btn" id="member"  onClick={(e) => handleClick(e)}>
                  Login as Member
                </NavLink>
                <NavLink to="/login" class="btn" id="volunteer"  onClick={(e) => handleClick(e)}>
                  login as Volunteer
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Preauth;
