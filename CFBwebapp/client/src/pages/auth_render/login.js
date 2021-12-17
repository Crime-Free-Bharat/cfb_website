import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Login from "../../components/user_auth/login_test";
const login = () => {
  return (
    <>
      <Navbar />
      <Login />
      <Footer />
    </>
  );
};

export default login;
