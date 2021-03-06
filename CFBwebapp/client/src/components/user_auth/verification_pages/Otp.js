import React from "react";
import otpimg from "../../../img/Vikru/undraw_authentication_fsn5.svg";

const Otp = () => {
  
  return (
    <>
      <div className="gridotp2">
        <div className="ref1otp2">
          <h2 className="vcotp2">
            Welcome! User,
            <br />
            everything is ready.
          </h2>
          <p className="ceotp">You will receive a confirmation email soon.</p>
          <i className="bi bi-calendar"></i>
          <p className="cd">Current Date</p>
          <br />
          <i className="bi bi-alarm"></i>
          <p className="ct">Current Time</p>
          <button className="gtvotp2">Go to homepage</button>
        </div>
        <div className="ref2otp2">
          <img className="logootp2" src={otpimg} alt="" />
        </div>
      </div>
    </>
  );
};

export default Otp;
