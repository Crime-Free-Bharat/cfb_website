import React from "react";
import Common from "./Common/Signup";
import "./preauth";
const intern = document.getElementById("intern");
const member = document.getElementById("member");
const volunteer = document.getElementById("volunteer");
const Signup = () => {
  if (intern) {
    return (
      <>
        <Common head="Want to become intern" />
      </>
    );
  } else if (member) {
    return (
      <>
        <Common head="Want to become member" />
      </>
    );
  } else {
    return (
      <>
        <Common head="Want to become volunteer" />
      </>
    );
  }
};

export default Signup;
