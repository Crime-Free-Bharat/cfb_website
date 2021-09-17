import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../components/user_auth/Login";
import Signup from "../components/user_auth/Signup";
import email from "../components/user_auth/Email_Res";
import emailver from "../components/user_auth/Email_Veri";
import Otp from "../components/user_auth/Otp";
import Otpconf from "../components/user_auth/Otpconf";

const AuthMain = () => (
  <>
    <Switch>
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/email" component={email} />
      <Route exact path="/emailver" component={emailver} />
      <Route exact path="/otp" component={Otp} />
      <Route exact path="/otpconf" component={Otpconf} />
    </Switch>
  </>
);

export default AuthMain;
