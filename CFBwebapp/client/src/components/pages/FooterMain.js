import React from "react";
import { Route, Switch } from "react-router-dom";
import Feedback from "../../pages/Footer_render/feedback";
import Policies from "../../pages/Footer_render/Polices";
import RTI from "../../pages/Footer_render/rti";
import FAQ from "../../pages/Footer_render/faq";
import TnC from "../../pages/Footer_render/tnc";
import Volunteer from "../../pages/Footer_render/vol";

const FooterMain = () => {
  return (
    <>
      <Switch>
        <Route exact path="/feedback" component={Feedback} />
        <Route exact path="/Policies" component={Policies} />
        <Route exact path="/RTI" component={RTI} />
        <Route exact path="/FAQ" component={FAQ} />
        <Route exact path="/TnC" component={TnC} />
        <Route exact path="/Volunteer" component={Volunteer} />
      </Switch>
    </>
  );
};

export default FooterMain;
