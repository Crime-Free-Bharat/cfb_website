import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../user_auth/AUTH/Common/Login";
import Signup from "../../pages/auth_render/signup";
import email from "../user_auth/verification_pages/Email_Res";
import emailver from "../user_auth/verification_pages/Email_Veri";
import Otp from "../user_auth/verification_pages/Otp";
import Otpconf from "../user_auth/verification_pages/Otpconf";
import Preauth from "../user_auth/preauth.js";

const AuthMain = () => {
  return (
    <>
      <Switch>
        <Route exact path="/otp" render={Otp} />
        <Route exact path="/otpver" component={Otpconf} />
        <Route exact path="/email" component={email} />
        <Route exact path="/emailver" component={emailver} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} /> 
        <Route exact path="/preauth" component={Preauth} />
      </Switch>
    </>
  );
};

export default AuthMain;
