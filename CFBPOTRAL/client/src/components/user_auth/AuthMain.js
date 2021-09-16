import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Login from './Login';
import Signup from './Signup';
import email from './Email_Res';
import emailver from './Email_Veri';
import Otp from './Otp';
import Otpconf from './Otpconf';

const AuthMain = () => (
    <main>
        <Switch>
            <Route exact path='/signup' component={Signup}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/email' component={email}/>
            <Route exact path='/emailver' component={emailver}/>
            <Route exact path='/otp' component={Otp}/>
            <Route exact path='/otpconf' component={Otpconf}/>
        </Switch>
    </main>
);

export default AuthMain;