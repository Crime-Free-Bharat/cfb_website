import React from "react";

import "./css/App.css";

import AuthMain from "./components/comp_pages/AuthMain";
import NavbarMain from "./components/comp_pages/NavbarMain";
import FooterMain from "./components/comp_pages/FooterMain";

const App = () => {
  return (
    <>
      <NavbarMain />
      <AuthMain />
      <FooterMain />
    </>
  );
};
export default App;
