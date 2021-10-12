import React from "react";
import img from "../../img/user_auth.svg";
import { NavLink } from "react-router-dom";

const Preauth = () => {
  return (
    <>
      <section className="prelogin">
        <div className="container">
          <h4 style={{ textAlign: "center", marginTop: "50px" }}>
            Create An Account? <NavLink to="#">Sign Up</NavLink>
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
              <NavLink to="/signup" className="fbpre btnpre" id="intern">
                Continue as a Intern
              </NavLink>
              <br />
              <NavLink to="/signup" className="googlepre btnpre" id="member">
                Continue as a Member
              </NavLink>
              <NavLink to="#" className="twitterpre btnpre" id="volunteer">
                Continue as a Volunteer
              </NavLink>
            </div>
          </div>
          <h6 style={{ textAlign: "center", marginTop: "50px" }}>
            Already have an account? <NavLink to="#">Login</NavLink>
          </h6>
        </div>
      </section>
    </>
  );
};

export default Preauth;
