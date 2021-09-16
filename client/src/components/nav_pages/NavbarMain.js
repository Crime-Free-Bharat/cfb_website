import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Report_crime from './Report_crime';
import About from './About';
import Contact from './Contact';
import Services from './Services';
import AnR from './AnR';
import Activities from './Activities';
import Media from './Media';

const NavbarMain = () => {
    return (
        <main>
            <Switch>
                <Route exact path="/report" component={Report_crime} />
                <Route exact path="/about" component={About} />
                <Route exact path="/contact" component={Contact} />
                <Route exact path="/services" component={Services} />
                <Route exact path="/anr" component={AnR} />
                <Route exact path="/activity" component={Activities} />
                <Route exact path="/media" component={Media} />
            </Switch>
        </main>
    );
};

export default NavbarMain;