import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../../pages/auth_render/login";
import Signup from "../../pages/auth_render/signup";
import email from "../user_auth/Email_Res";
import emailver from "../user_auth/Email_Veri";
import Otp from "../user_auth/Otp";
import Otpconf from "../user_auth/Otpconf";

const AuthMain = () => (
  <>
    <Switch>
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/email" component={email} />
      <Route exact path="/emailver" component={emailver} />
      <Route exact path="/otp" component={Otp} />
      <Route exact path="/otpver" component={Otpconf} />
    </Switch>
  </>
);

export default AuthMain;
