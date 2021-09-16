import React from "react";
import otpConfImg from '../../img/Vikru/undraw_Envelope_re_f5j4.svg'

const Otpconf = () => {
    return (<>
        <div class="grid">
            <div class="ref1">
                <h2 class="vc">Welcome! User,<br />everything is ready.</h2>
                    <p class="ce">You will receive a confirmation email soon.</p>
                    <i class="far fa-calendar-alt"></i>
                    Current Date<br />
                    <i class="far fa-clock"></i>
                    Current Time
                    <button class="gtv">Go to homepage</button>
            </div>
            <div class="ref2">
                <img class="logo" src={otpConfImg} alt="otpConfImg" />
            </div>
        </div>
    </>);
}

export default Otpconf;