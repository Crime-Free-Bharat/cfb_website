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
          Right to information, a revolutionary act by the Parliament of India, empowering every citizen of India to secure access to information under the control of public authorities to promote transparency in the Indian democracy. This preliminary act was passed in the year 2005. Though it was passed on the 15th of June, it was enacted only by the 12th of October 2005. This act opens the door for scrutiny and makes a solid defense against corruption, now every public authority is accountable to every citizen who wishes to seek information. It is a major act in establishing democracy making every organization, government official accountable to be questioned by the taxpayers that how their money is being used. 
          </p></div>
          <br />
         
        </div>
      </div>
      <div className="itemRTI1 RTISubmit">
          <p>
          Right to information includes: 
          </p></div>
      <div className="grid2">
        <div className="itemRTI item0">
          <NavLink to="#">	Any document, manuscript, or files </NavLink>
        </div>
        <div className="itemRTI item2">
          <NavLink to="#">	Any microfilm or copy of any document </NavLink>
        </div>
        <div className="itemRTI item3 ">
          <NavLink to="#">	Any image or copy of an image </NavLink>
        </div>
               <div className="itemRTI item5">
          <NavLink to="#">How to submit RTI Application </NavLink>
        </div>     
        
      </div>
      <div className="grid3">
      <div className="itemRTI2 grid3_item">
          <NavLink to="#">Any material produced by a computer or any other device 
RTI is so in favor of the people that even an illiterate person can file it to know the transparent details of his requirement unless it would affect national security, sovereignty, strategic or scientific interest, or something disallowed by court , or violating someone right to privacy . 
One can easily file RTI, to the PIO (Public information officer) of the department concerned. You can write an application online or offline in any language with a stamp paper of 10 rupees, which is exempted in case of BPL. PIO are obliged to convey back with all the answers within a respected time of 30 days. If due to any reason the response is delayed the PIO can be fined unless he specifies back the reason for delay. 
 </NavLink>
        </div>
        </div>
    </div>
  );
}

export default RTI;
