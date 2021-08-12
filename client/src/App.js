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
import Footer from "./components/Footer";
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
      </Switch>
      <Footer />
    </>
  );
};

export default App;
