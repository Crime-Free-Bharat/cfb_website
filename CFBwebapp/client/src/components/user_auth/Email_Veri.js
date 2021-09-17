import React from "react";
import mailSent from "../../img/undraw_Mail_sent_re_0ofv.svg";

function Email_Veri() {
  return (
    <>
      <div class="grid">
        <div class="logo">
          <img src={mailSent} alt="Mail Sent" srcset="" />
        </div>
        <div class="title">Verify your email</div>
        <div class="description">
          We've sent an email to emailid to verify your email address and
          activate your account. The link in the email will expire in 24 hours.
        </div>
        <div class="clickhere">
          <a href="/email" class="click">
            Click here{" "}
          </a>
          if you did not receive an email or would like to change the email
          address you signed up with.
        </div>
        <div class="button">
          <button class="Resend">Resend Verification Link</button>
        </div>
      </div>
    </>
  );
}

export default Email_Veri;
