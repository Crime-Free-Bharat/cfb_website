import React from "react";
import otpConfImg from '../../img/Vikru/undraw_authentication_fsn5.svg'

const Otpconf = () => {
    return (<>
        <div class="gridotp">
        <div class="ref1otp">
            <h2 class="vcotp">Enter verification code</h2>
                <p class="descriptionotp">We have just sent a verification code to lorenzo@gmail.com and +39 2345174297</p>
                <input class="codeotp" type="text" placeholder="Enter Code" maxlength="4"/>
                <a href="#" id="scotp">Send the code again</a>
                <a href="#" id="scotp">Change phone number</a>
                <button class="verifyotp">Verify</button>
        </div>
        <div class="ref2otp">
            <img src={otpConfImg} class="logootp"/>
        </div>
    </div>
    </>);
}

export default Otpconf;