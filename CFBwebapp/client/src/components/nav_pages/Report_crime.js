import React from "react";

const Report_crime = () => {
 
  return (
    <>
      <div className="container mt-4">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="sectionheadreport">Report a Crime</h3>
            <p className="sectionparareport">
              The effectiveness of police activities is enhanced by the support
              of citizens in
              <br /> every community that wants to feel safe and secure.
            </p>
          </div>
          <div className="col-sm-12">
            <div className="row">
              <div className="col-12 boxstyle">
                <h3>Complain Details</h3>
              </div>
            </div>
            <form>
              <div className="row">
                <div className="col-6">
                  <select
                    type="text"
                    className="form-control"
                    placeholder="Category of Complain"
                  >
                    <option disabled select="true">
                      Category of Complain
                    </option>
                    <option>Category of Complain</option>
                  </select>
                </div>
                <div className="col-6">
                  <input type="date" className="form-control" />
                </div>
              </div>
              <br />
              <div className="row" id="map">
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Select State"
                    id="autocompleteState"
                    // onClick={TestAutocomplete}
                  />
                </div>
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Select District"
                  />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Select Police Station"
                  />
                </div>
                <div className="col-6">
                  <input
                    type="file"
                    className="form-control"
                    id="upload_file"
                    // onChange={handleinputs}
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
                    rows="5"
                    placeholder="report"
                  ></textarea>
                  <br />
                </div>
              </div>
            </form>
          </div>
          <div className="col-sm-12">
            <div className="row">
              <div className="col-12 boxstyle">
                <h3>Suspect Details</h3>
              </div>
            </div>
            <form>
              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Suspect Name"
                  />
                </div>
                <div className="col-6">
                  <input type="file" className="form-control" />
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-12">
                  <textarea
                    type="text"
                    className="form-control"
                    rows="5"
                    placeholder="report"
                  ></textarea>
                </div>
              </div>
              <br />
              <div className="row">
                <div className="col-12">
                  <button type="submit" className="sendbtn">
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Report_crime;
