import React from "react";
import feedbackimg from "../../img/feedback.svg";

function Feedback() {
  return (
    <>
      <section id="" class="section fdsection">
        <div class="container bgcont">
          <div class="row">
            <div class="col-sm-6">
              <h3 class="sectionhead">Feed Back</h3>
              <p class="sectionpara">
                Your feedback is valuable to us.
                <br /> Thank you for your time!
              </p>
              <img src={feedbackimg} class="img-responsive stctionimg" alt="feedback" />
            </div>
            <div class="col-sm-6 secondsec">
              <form>
                <div class="row">
                  <div class="col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Name *"
                    />
                  </div>
                  <div class="col-6">
                    <input
                      type="number"
                      class="form-control"
                      placeholder="Phone *"
                    />
                  </div>
                </div>
                <br />
                <div class="row">
                  <div class="col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Email *"
                    />
                  </div>
                  <div class="col-6">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Subject *"
                    />
                  </div>
                </div>
                <br />
                <div class="row">
                  <div class="col-12">
                    <textarea
                      type="text"
                      class="form-control"
                      placeholder="Message *"
                      rows="7"
                    ></textarea>
                  </div>
                </div>
                <br />
                <div class="row">
                  <div class="col-12">
                    <button type="submit" class="sendbtn">
                      Submit Feedback
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
}

export default Feedback;
