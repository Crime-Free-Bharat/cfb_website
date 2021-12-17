import React from "react";
import Common from "./AUTH/Common/Login";

const Login = () => {
  if (window.myRole==='intern') {
    return (
      <>
        <Common head="Want to become an Intern" />
      </>
    );
  } else if (window.myRole=== 'member') {
    return (
      <>
        <Common head="Want to become a Member" />
      </>
    );
  }else if (window.myRole=== 'volunteer') {
    return (
      <>
        <Common head="Want to become a Volunteer" />
      </>
    );
  } else {
    return (
      <>
        <Common head="New User" />
      </>
    );
  }
};

export default Login;
