import React from "react";
import rtiImg from "../../img/rti-poster-img.png";
import { NavLink } from "react-router-dom";
function RTI() {
  return (
    <div>
      <div className="grid1">
        <div className="item2">
          <div className="poster">
            <img src={rtiImg} alt="rti" />
          </div>
        </div>
        <div className="item1">
          <p>
            DRDO is placed in Second Schedule of RTI Act, 2005 and is exempt
            from disclosure of information under Section 24(1) except
            information pertaining to the allegations of corruption and human
            rights  violations.
          </p>
          <br />
          <div className="item3 RTISubmit">
          <h4 id="submitRTI">
            How To Submit RTI Application (Hindi)PDF file that opens in new
            window.
          </h4></div>
        </div>
      </div>

      <div className="grid2">
        <div className="item3">
          <NavLink to="#">Public Authorities under DRDO</NavLink>
        </div>
        <div className="item3">
          <NavLink to="#">RTI Act, 2005 (Ministry of Law and Justice) </NavLink>
        </div>
        <div className="item3">
          <NavLink to="#">Exemption under RTI Act, 2005 </NavLink>
        </div>
        <div className="item3">
          <NavLink to="#">
            Guidelines for Information Seekers (English {"&"} Hindi)
          </NavLink>
        </div>
        <div className="item3">
          <NavLink to="#">How to submit RTI Application </NavLink>
        </div>
        <div className="item3">
          <NavLink to="#">Frequently Asked Questions on RTI </NavLink>
        </div>
        <div className="item3">
          <NavLink to="#">Suo Motu disclosures u/s 4(1)(b) of the ACT </NavLink>
        </div>
        <div className="item3">
          <NavLink to="#">Important Decisions/orders </NavLink>
        </div>
      </div>
    </div>
  );
}

export default RTI;
