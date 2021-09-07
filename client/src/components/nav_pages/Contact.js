import React, { useState } from "react";
import contactus from "../../img/contactus.svg";

const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    phone: "",
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

    const { name, email, subject, message, phone } = user;

    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        subject,
        message,
        phone,
      }),
    });
    const data = await res.json();
    if (!data || res.status === 422) {
      window.alert("invalid data");
      console.log("invalid registration");
    } else {
      window.alert("your message has been send sucessfully");
    }
  };
  return (
    <>
      <section id="" className="section">
        <div className="container bgcont">
          <div className="row">
            <div className="col-sm-6">
              <h3 className="sectionhead">Contact Us</h3>
              <p className="sectionpara">
                Feel free to keep in
                <br /> touch with us!
              </p>
              <img
                src={contactus}
                className="img-responsive stctionimg"
                alt="contactus"
              />
            </div>
            <div className="col-sm-6 secondsec">
              <form method="POST">
                <div className="row">
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name="name"
                      value={user.name}
                      onChange={handleinputs}
                      required
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Phone"
                      name="phone"
                      value={user.phone}
                      onChange={handleinputs}
                      required
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      value={user.email}
                      onChange={handleinputs}
                      required
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      name="subject"
                      value={user.subject}
                      onChange={handleinputs}
                      required
                    />
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-12">
                    <textarea
                      type="text"
                      className="form-control"
                      placeholder="Message"
                      rows="7"
                      name="message"
                      value={user.message}
                      onChange={handleinputs}
                    ></textarea>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-12">
                    <button
                      type="submit"
                      className="sendbtn"
                      name="submit"
                      value="submit"
                      onClick={PostData}
                    >
                      SUBMIT
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
