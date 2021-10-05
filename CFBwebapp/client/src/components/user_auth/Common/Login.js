import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");

  const LoginUser = async (e) => {
    e.preventDefault();

    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await res.json();

    if (!data || res.status === 400) {
      window.alert("invalid credentials");
      console.log("invalid credentials");
    } else {
      window.alert("perfect credentials");
      console.log("successful credentials");
      history.push("/");
    }
  };
  return (
    <>
      <section className="signup">
        <div className="container">
          <h4 className="text-center mt-5 fs-5">
            Don't have an account?
            <NavLink to="/signup" className="login">
               Sign up
            </NavLink>
          </h4>
          <div className="signup-content">
            <div className="signup-form">
              <form>
                <div className="vl"></div>
                <div className="form-group">
                  <label for="email">
                    <i className="bi bi-envelope"></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    autoComplete="off"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label for="pass">
                    <i className="bi bi-shield-lock"></i>
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                  />
                </div>
                <div className="form-group form-button">
                  <button
                    type="submit"
                    name="signin"
                    id="signin"
                    value="Log in"
                    onClick={LoginUser}
                    className="signbtn"
                  >
                    <b>Login</b>
                  </button>
                </div>
              </form>
            </div>
            <hr />
            <div className="signup-image">
              <NavLink to="#" className="fb btn" id="fb">
                <i className="fa fa-facebook fa-fw"></i>
                Login with Facebook
              </NavLink>
              <br />
              <NavLink to="#" className="google btn" id="google">
                <i className="fa fa-google fa-fw"></i> Login with Google
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
