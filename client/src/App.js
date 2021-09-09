import React from "react";

import "./css/App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/user_auth/Signup";
import Login from "./components/user_auth/Login";
import Report_crime from "./components/nav_pages/Report_crime";
import About from "./components/nav_pages/About";
import Contact from "./components/nav_pages/Contact";
import Services from "./components/nav_pages/Services";
import AnR from "./components/nav_pages/AnR";
import Activities from "./components/nav_pages/Activities";
import Footer from "./components/Footer";
import FAQ from "./components/footer_pg/FAQ";
import TnC from "./components/footer_pg/TnC";
import Feedback from "./components/footer_pg/Feedback";
import Media from "./components/nav_pages/Media";
import Policies from "./components/footer_pg/Policies";
import RTI from "./components/footer_pg/RTI";
import Home from "./components/Home";

const NavRouting = () => {
  return (
    <Switch>
      <Route exact path="/report" component={Report_crime} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/anr" component={AnR} />
      <Route exact path="/activity" component={Activities} />
      <Route exact path="/media" component={Media} />
    </Switch>
  );
};
const AuthRouting = () => {
  return (
    <Switch>
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
    </Switch>
  );
};

const FooterRouting = () => {
  return (
    <Switch>
      <Route exact path="/feedback" component={Feedback} />
      <Route exact path="/Policies" component={Policies} />
      <Route exact path="/RTI" component={RTI} />
      <Route exact path="/FAQ" component={FAQ} />
      <Route exact path="/TnC" component={TnC} />
    </Switch>
  );
};
const App = () => {
  return (
    <>
      <Navbar />

      <NavRouting />
      <AuthRouting />
      <FooterRouting />

      <Footer />
    </>
  );
};

export default App;
