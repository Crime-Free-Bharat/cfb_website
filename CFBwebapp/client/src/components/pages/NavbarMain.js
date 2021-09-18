import React from "react";
import { Route, Switch } from "react-router-dom";
import Report_crime from "../nav_pages/Report_crime";
import About from "../nav_pages/About";
import Contact from "../nav_pages/Contact";
import Services from "../nav_pages/Services";
import AnR from "../nav_pages/AnR";
import Activities from "../nav_pages/Activities";
import Media from "../nav_pages/Media";

const NavbarMain = () => {
  return (
    <>
      <Switch>
        <Route exact path="/report" component={Report_crime} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/anr" component={AnR} />
        <Route exact path="/activity" component={Activities} />
        <Route exact path="/media" component={Media} />
      </Switch>
    </>
  );
};
export default NavbarMain;
