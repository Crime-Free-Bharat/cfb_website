import React, {useState} from "react";
// import feedbackimg from "../../img/feedback.svg";

function Feedback() {
  const [userData, setUserData] = useState({
    fname: "",
    fphone: "",
    femail: "",
    fsubject: "",
    fmessage: "",
  });

  //we are storing data
  const handleinputs = e => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  //=== send data to backend ==========
  const feedbackForm = async e => {
    e.preventDefault();
    const {fname, fphone, femail, fsubject, fmessage} = userData;
    if (!fname || !fphone || !femail || !fsubject || !fmessage) {
      alert("fill data");
    } else {
      const res = await fetch("/feedback", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fname,
          fphone,
          femail,
          fsubject,
          fmessage,
        }),
      });
      const data = await res.json();
      if (!data || res.status === 400) {
        alert("FeedBack Not send Try again");
      } else {
        alert(
          " Your valuable Feedback is Successfully Send Thank You For Reaching Us",
        );
        setUserData({
          fname: "",
          fphone: "",
          femail: "",
          fsubject: "",
          fmessage: "",
        });
      }
    }
  };
  return (
    <>
      <div className="feedback">
        <section className="sectionfeedback">
          <div class="container bgcont">
            <div className="row">
              <div class="col-sm-12">
                <h3 class="sectionheadacttc">Feedback Form</h3>
                <p class="sectionparaactfeedback1">
                  We'd love to hear from you
                </p>
                <p class="sectionparaactfeedback2">
                  Feel free to talk to us if you have any questions. <br />
                  Just fill the form and we will get in touch with you shortly.
                  <br />
                </p>
              </div>
            </div>
            <div className="feedbackcontainer">
              <div className="feedbackitem1">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Name *"
                  name="fname"
                  value={userData.fname}
                  onChange={handleinputs}
                  required
                />
              </div>
              <div className="feedbackitem3">
                <input
                  type="number"
                  class="form-control"
                  placeholder="Phone *"
                  name="fphone"
                  value={userData.fphone}
                  onChange={handleinputs}
                  required
                />
              </div>

              <div className="feedbackitem4">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Email *"
                  name="femail"
                  value={userData.femail}
                  onChange={handleinputs}
                  required
                />
              </div>

              <div className="feedbackitem5">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Subject *"
                  name="fsubject"
                  value={userData.fsubject}
                  onChange={handleinputs}
                  required
                />
              </div>
              <div className="feedbackitem2">
                <textarea
                  type="text"
                  class="form-control"
                  placeholder="Message *"
                  name="fmessage"
                  value={userData.fmessage}
                  onChange={handleinputs}
                  rows="12"></textarea>
              </div>

              <div>
                <div class="row feedbacksendbtn feedbackitem6">
                  <div class="">
                    <button
                      type="submit"
                      class="sendbtnfeedback"
                      name="submit"
                      value="submit"
                      onClick={feedbackForm}>
                      Submit Feedback
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </section>
      </div>
    </>
  );
}

export default Feedback;
