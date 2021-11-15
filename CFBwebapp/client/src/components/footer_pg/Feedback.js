import React from "react";
// import feedbackimg from "../../img/feedback.svg";

function Feedback() {
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
             
              <input type="text" class="form-control" placeholder="Name *" />
            </div>            
            <div className="feedbackitem3">
             
              <input type="number" class="form-control" placeholder="Phone *" />
            </div>
            
            <div className="feedbackitem4">
             
              <input type="text" class="form-control" placeholder="Email *" />
            </div>
            
            <div className="feedbackitem5">
             
              <input type="text" class="form-control" placeholder="Subject *" />
            </div>
              <div className="feedbackitem2">
             
              <textarea
                type="text"
                class="form-control"
                placeholder="Message *"
                rows="12"></textarea>
            </div>
           
            <div>
              <div class="row feedbacksendbtn feedbackitem6">
                <div class="">
                  <button type="submit" class="sendbtnfeedback">
                    Submit Feedback
                  </button>
                </div>
              </div>

             
            </div>
          </div> </div>
          {/* <img
            src={feedbackimg}
            class="img-responsive stctionimg2"
            alt="feedback"
          /> */}
        </section>
      </div>
    </>
  );
}

export default Feedback;
