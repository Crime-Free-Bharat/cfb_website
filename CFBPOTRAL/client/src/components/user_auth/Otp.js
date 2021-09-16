import React from "react";
import otpimg from "../../img/Vikru/undraw_authentication_fsn5.svg";

const Otp = () => {
  return (
    <>
      <div class="grid">
        <div class="ref1">
          <h2 class="vc">Enter verification code</h2>
          <p class="description">
            We have just sent a verification code to lorenzo@gmail.com and +39
            2345174297
          </p>
          <input
            class="code"
            type="text"
            placeholder="Enter Code"
            maxlength="4"
          />
          <a href="#" id="sc">
            Send the code again
          </a>
          <a href="#" id="sc">
            Change phone number
          </a>
          <button class="verify">Verify</button>
        </div>
        <div class="ref2">
          <img src={otpimg} class="logo" alt="otpimg" />
        </div>
      </div>
    </>
  );
};

export default Otp;
