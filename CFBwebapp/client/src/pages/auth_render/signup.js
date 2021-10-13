import React from "react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import Signup from "../../components/user_auth/AUTH/signup_vol";
const signup = () => {
  return (
    <>
      <Navbar />
      <Signup />
      <Footer />
    </>
  );
};

export default signup;
