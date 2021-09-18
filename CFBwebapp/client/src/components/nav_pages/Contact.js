import React, { useState } from "react";
import contactus from "../../img/contactus.svg";

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  //we are storing data
  const handleinputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  //=== send data to backend ==========
  const contactForm = async (e) => {
    e.preventDefault();
    const { name, phone, email, subject, message } = userData;
    if (!name || !phone || !email || !subject || !message) {
      alert("fill data");
    } else {
      const res = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email,
          subject,
          message,
        }),
      });
      const data = await res.json();
      if (!data || res.status === 400) {
        alert("data not send");
      } else {
        alert("message send khush hoja");
        setUserData({ ...userData, message: "" });
      }
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
                      value={userData.name}
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
                      value={userData.phone}
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
                      value={userData.email}
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
                      value={userData.subject}
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
                      value={userData.message}
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
                      onClick={contactForm}
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
