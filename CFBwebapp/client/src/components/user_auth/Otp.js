import React from "react";
import otpimg from "../../img/Vikru/undraw_authentication_fsn5.svg";

const Otp = () => {
  return (
    <>
      <div class="gridotp2">
        <div class="ref1otp2">
          <h2 class="vcotp2">
            Welcome! User,
            <br />
            everything is ready.
          </h2>
          <p class="ceotp">You will receive a confirmation email soon.</p>
          <i class="bi bi-calendar"></i>
          Current Date
          <br />
          <i class="bi bi-alarm"></i>
          Current Time
          <button class="gtvotp2">Go to homepage</button>
        </div>
        <div class="ref2otp2">
          <img class="logootp2" src={otpimg} />
        </div>
      </div>
    </>
  );
};

export default Otp;
