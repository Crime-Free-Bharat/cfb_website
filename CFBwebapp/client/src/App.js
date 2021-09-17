import React from "react";
import "./css/App.css";

import AuthMain from "./pages/AuthMain";
import NavbarMain from "./pages/NavbarMain";
import FooterMain from "./pages/FooterMain";

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
