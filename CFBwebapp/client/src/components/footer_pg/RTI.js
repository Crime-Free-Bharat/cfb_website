import React from "react";
import rtiImg from "../../img/rti-poster-img.jpg";

function RTI() {
  return (
    <div>
      <div class="grid1">
        <div class="item2">
          <div class="poster">
            <img src={rtiImg} alt="rti image" />
          </div>
        </div>
        <div class="item1">
          <p>
            DRDO is placed in Second Schedule of RTI Act, 2005 and is exempt
            from disclosure of information under Section 24(1) except
            information pertaining to the allegations of corruption and human
            rights violations.
          </p>
          <br />
          <p id="submit">
            How To Submit RTI Application (Hindi)PDF file that opens in new
            window.
          </p>
        </div>
      </div>

      <div class="grid2">
        <div class="item3">
          <a href="#">Public Authorities under DRDO</a>
        </div>
        <div class="item3">
          <a href="#">RTI Act, 2005 (Ministry of Law and Justice) </a>
        </div>
        <div class="item3">
          <a href="#">Exemption under RTI Act, 2005 </a>
        </div>
        <div class="item3">
          <a href="#">
            Guidelines for Information Seekers (English {"&"} Hindi)
          </a>
        </div>
        <div class="item3">
          <a href="#">How to submit RTI Application </a>
        </div>
        <div class="item3">
          <a href="#">Frequently Asked Questions on RTI </a>
        </div>
        <div class="item3">
          <a href="#">Suo Motu disclosures u/s 4(1)(b) of the ACT </a>
        </div>
        <div class="item3">
          <a href="#">Important Decisions/orders </a>
        </div>
      </div>
    </div>
  );
}

export default RTI;
