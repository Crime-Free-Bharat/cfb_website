import React from "react";

function Email_Res(){
    return <>
    <div class="grid">
        <div class="logo">
            <i class="fas fa-envelope-open-text" id="i"></i>
        </div>
        <div class="title">
            Didn't receive an email or want to change?
        </div>
        <div class="description">
            It may take a few minutes for the email to reach your inbox or may end up in your spam folder. <br /> Still
            nothing? Re-enter your email and try again.
        </div>
        <div class="inputfield">
            <p class="emailt">Email Address</p>
            <input type="text" class="input" placeholder="emailaddress@company.com" /> 
        </div>
        <div class="button">
            <button class="Back">Back</button>
            <button class="Resend">Send new verification link</button>
        </div>
        <div class="contacsupp">
            Still not seeing it? <a href="#" class="anchor"> Contact Support</a>
        </div>
    </div>
    </>
    
}

export default Email_Res;