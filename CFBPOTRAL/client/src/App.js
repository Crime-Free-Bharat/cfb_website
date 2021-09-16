import React from "react";

import "./css/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AuthMain from "./components/user_auth/AuthMain";
import NavbarMain from "./components/nav_pages/NavbarMain";
import FooterMain from "./components/footer_pg/FooterMain";

const App = () => {
  return (
    <>
      <Navbar />
      <NavbarMain />
      <AuthMain />
      <FooterMain />
      <Footer />
    </>
  );
};

export default App;
