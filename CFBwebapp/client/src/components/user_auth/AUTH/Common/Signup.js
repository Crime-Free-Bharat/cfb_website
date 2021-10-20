import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

const Signup = (props) => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    cpassword: "",
  });
  let name, value;
  const handleinputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };
  const PostData = async (e) => {
    e.preventDefault();

    const { name, email, phone, password, cpassword } = user;

    const res = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
        cpassword,
      }),
    });
    const data = await res.json();
    if (!data || res.status === 422) {
      window.alert("invalid data");
      console.log("invalid registration");
    } else {
      window.alert("Registration Succesfull");
      history.push("/emailver");
    }
  };
  return (
    <>
      <section className="signup">
        <div className="container">
        <h4 className="text-center mt-5 fs-5">Welcome {props.head}</h4> 
          <h4 className="text-center mt-2 fs-5">
            Already have an account?
            <NavLink to="/login" className="login">
              Log In
            </NavLink>
          </h4>
          <div className="signup-content">
            <div className="signup-form">
              <form method="POST">
                <div className="vl"></div>
                <div className="form-group">
                  <label for="name">
                    <i className="bi bi-person"></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    autoComplete="off"
                    value={user.name}
                    onChange={handleinputs}
                  />
                </div>
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
                    value={user.email}
                    onChange={handleinputs}
                  />
                </div>
                <div className="form-group">
                  <label for="email">
                    <i className="bi bi-telephone"></i>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    placeholder="Your Phone"
                    autoComplete="off"
                    value={user.phone}
                    onChange={handleinputs}
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
                    value={user.password}
                    onChange={handleinputs}
                  />
                </div>
                <div className="form-group">
                  <label for="re-pass">
                    <i className="bi bi-shield-lock-fill"></i>
                  </label>
                  <input
                    type="password"
                    name="cpassword"
                    id="cpassword"
                    placeholder="Repeat your password"
                    autoComplete="off"
                    value={user.cpassword}
                    onChange={handleinputs}
                  />
                </div>
                <div className="form-group form-button">
                  <button
                    type="submit"
                    name="signup"
                    id="signup"
                    value="register"
                    onClick={PostData}
                    className="signbtn"
                  >
                    <b>Sign Up</b>
                  </button>
                </div>
              </form>
            </div>
            <hr />
            <div className="signup-image">
              <br />
              <br />
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

export default Signup;
