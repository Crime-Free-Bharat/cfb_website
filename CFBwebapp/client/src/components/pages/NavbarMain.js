import React from "react";
import { Route, Switch } from "react-router-dom";
import Report_crime from "../../pages/Navbar_render/Report";
import About from "../../pages/Navbar_render/About"; 
import Contact from "../../pages/Navbar_render/Contact";
import Services from "../../pages/Navbar_render/Services";
import AnR from "../../pages/Navbar_render/Anr";
import Media from "../../pages/Navbar_render/Media";
import Activities from "../../pages/Navbar_render/Activity";


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
