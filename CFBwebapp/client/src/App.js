import React from "react";
// import "./css/AuthPages.css";
import "./css/App.css";

import AuthMain from "./components/pages/AuthMain";
import NavbarMain from "./components/pages/NavbarMain";
import FooterMain from "./components/pages/FooterMain";

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
