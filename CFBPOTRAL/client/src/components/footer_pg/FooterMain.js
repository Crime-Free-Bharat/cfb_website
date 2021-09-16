import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Feedback from './Feedback';
import Policies from './Policies';
import RTI from './RTI';
import FAQ from './FAQ';
import TnC from './TnC';

const FooterMain = () => {
    return (
    <main>
        <Switch>
            <Route exact path="/feedback" component={Feedback} />
            <Route exact path="/Policies" component={Policies} />
            <Route exact path="/RTI" component={RTI} />
            <Route exact path="/FAQ" component={FAQ} />
            <Route exact path="/TnC" component={TnC} />
        </Switch>
    </main>
    );
};

export default FooterMain;