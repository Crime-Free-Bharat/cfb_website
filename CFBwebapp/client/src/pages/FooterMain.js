import React from "react";
import { Route, Switch } from "react-router-dom";
import Feedback from "../components/footer_pg/Feedback";
import Policies from "../components/footer_pg/Policies";
import RTI from "../components/footer_pg/RTI";
import FAQ from "../components/footer_pg/FAQ";
import TnC from "../components/footer_pg/TnC";

const FooterMain = () => {
  return (
    <>
      <Switch>
        <Route exact path="/feedback" component={Feedback} />
        <Route exact path="/Policies" component={Policies} />
        <Route exact path="/RTI" component={RTI} />
        <Route exact path="/FAQ" component={FAQ} />
        <Route exact path="/TnC" component={TnC} />
      </Switch>
    </>
  );
};

export default FooterMain;
