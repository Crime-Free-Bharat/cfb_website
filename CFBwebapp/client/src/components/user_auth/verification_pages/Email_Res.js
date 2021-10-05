import React from "react";
import { NavLink } from "react-router-dom";
import mailSent from "../../../img/undraw_Mail_sent_re_0ofv.svg";
const Email_Res = () => {
  return (
    <>
      <div className="grid">
        <div className="logo">
          <img src={mailSent} alt="" srcset="" />
        </div>
        <div className="title">Didn't receive an email or want to change?</div>
        <div className="description">
          It may take a few minutes for the email to reach your inbox or may end
          up in your spam folder. <br /> Still nothing? Re-enter your email and
          try again.
        </div>

        <div className="inputfield">
          <div>
            <p className="email m-2">Email Address</p>
          </div>
          <input
            type="email"
            className="input1"
            placeholder="emailaddress@company.com"
          />
        </div>
        <div className="button">
          <button className="Back1">Back</button>
          <button className="Resend1">Send new verification link</button>
        </div>
        <div className="contacsupp">
          Still not seeing it?
          <NavLink to="#" className="anchor">
            Contact Support
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Email_Res;
