import React from "react";
import rtiImg from "../../img/rti-poster-img.png";
import { NavLink } from "react-router-dom";
function RTI() {
  return (
    <div className="RTImain">
      <div className="grid1">
        
          <div className="poster">
            <img src={rtiImg} alt="rti" />
          </div>
       
        <div rtiitem2>
          <div className="rtiitem2_1">
          <p>
            DRDO is placed in Second Schedule of RTI Act, 2005 and is exempt
            from disclosure of information under Section 24(1) except
            information pertaining to the allegations of corruption and human
            rights  violations.
          </p></div>
          <br />
          <div className="itemRTI1 RTISubmit">
          <p>
            How To Submit RTI Application (Hindi)PDF file that opens in new
            window.
          </p></div>
        </div>
      </div>

      <div className="grid2">
        <div className="itemRTI item0">
          <NavLink to="#">Public Authorities under DRDO</NavLink>
        </div>
        <div className="itemRTI item2">
          <NavLink to="#">RTI Act, 2005 (Ministry of Law and Justice) </NavLink>
        </div>
        <div className="itemRTI item3 ">
          <NavLink to="#">Exemption under RTI Act, 2005 </NavLink>
        </div>
        <div className="itemRTI item4">
          <NavLink to="#">
            Guidelines for Information Seekers (English {"&"} Hindi)
          </NavLink>
        </div>
        <div className="itemRTI item5">
          <NavLink to="#">How to submit RTI Application </NavLink>
        </div>
        <div className="itemRTI item6">
          <NavLink to="#">Frequently Asked Questions on RTI </NavLink>
        </div>
        <div className="itemRTI item7">
          <NavLink to="#">Suo Motu disclosures u/s 4(1)(b) of the ACT </NavLink>
        </div>
        <div className="itemRTI item8">
          <NavLink to="#">Important Decisions/orders </NavLink>
        </div>
      </div>
    </div>
  );
}

export default RTI;
