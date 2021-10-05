import React from "react";
import otpConfImg from '../../../img/Vikru/undraw_authentication_fsn5.svg'
import { NavLink } from "react-router-dom";
const Otpconf = () => {
    return (<>
        <div class="gridotp">
        <div class="ref1otp">
            <h2 class="vcotp">Enter verification code</h2>
                <p class="descriptionotp">We have just sent a verification code to lorenzo@gmail.com and +39 2345174297</p>
                <input class="codeotp" type="text" placeholder="Enter Code" maxlength="4"/>
                <NavLink to="#" id="scotp">Send the code again</NavLink>
                <NavLink to="#" id="scotp">Change phone number</NavLink>
                <button class="verifyotp">Verify</button>
        </div>
        <div class="ref2otp">
            <img src={otpConfImg} class="logootp" alt=""/>
        </div>
    </div>
    </>);
}

export default Otpconf;