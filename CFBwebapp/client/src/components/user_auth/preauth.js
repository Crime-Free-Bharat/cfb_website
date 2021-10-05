import React from "react";
import img from "../../img/user_auth.svg";
import { NavLink } from "react-router-dom";
const Preauth = () => {
  return (
    <>
      <section className="signup">
        <div className="container">
          <h4 className="text-center mt-5 fs-5">
           WELCOME
          </h4>
          <div className="signup-content">
            <div className="signup-form">
              <div className="vl" style={{ height: "300px" }}></div>
              <img src={img} className="img-responsive" style={{height: "300px"}} alt="auth"/>
            </div>
          </div>
          <hr />
          <div className="signup-image" style={{ marginTop: "70px" }}>
            <NavLink to="#" className="fb btn" id="fb">
              Continue as a Member
            </NavLink>
            <br />
            <NavLink to="#" className="google btn" id="google">
              Continue as a Authorisation
            </NavLink>
            <NavLink to="#" className="twitter btn" id="twitter">
              Continue as a Volunteer
            </NavLink>
          </div>
        </div>
        <h6 style={{ textAlign: "center", marginTop: "50px" }}>
          Already have an account? <NavLink to="#">Login</NavLink>
        </h6>
      </section>
    </>
  );
};

export default Preauth;
