import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Feedback from '../footer_pg/Feedback';
import Policies from '../footer_pg/Policies';
import RTI from '../footer_pg/RTI';
import FAQ from '../footer_pg/FAQ';
import TnC from '../footer_pg/TnC';

const FooterMain = () => {
    return (
    <>
        <Switch>
            <Route exact path="/feedback" component={Feedback} />
            <Route exact path="/Policies" component={Policies} />
            <Route exact path="/RTI" component={RTI} />
            <Route exact path="/FAQ" component={FAQ} />
            <Route exact path="/TnC" component={TnC} />
        </Switch>
    </>
    );
};

export default FooterMain;