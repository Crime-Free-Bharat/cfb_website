import React from "react";

import "./App.css";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Report_crime from "./components/Report_crime";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import AnR from "./components/AnR";
import Activities from "./components/Activities";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import TnC from "./components/TnC";

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/report" component={Report_crime} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/anr" component={AnR} />
        <Route exact path="/activity" component={Activities} />
        <Route exact path="/FAQ" component={FAQ} />
        <Route exact path="/TnC" component={TnC} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
