import React from "react";
import { NavLink } from "react-router-dom";
const Errorpage = () => {
  return (
    <>
      <div id="notfound">
        <div class="notfound">
          <div class="notfound-404"></div>
          <h1>404</h1>
          <h2>Oops! Page Not Be Found</h2>
          <p>
            Sorry but the page you are looking for does not exist, have been
            removed. name changed or is temporarily unavailable
          </p>
          <NavLink to="/">Back to homepage</NavLink>
        </div>
      </div>
    </>
  );
};

export default Errorpage;
