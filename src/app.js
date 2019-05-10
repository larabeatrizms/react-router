
import React from 'react';
import ReactDOM from 'react-dom';
/*import {HashRouter, Route } from 'react-router-dom';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
*/
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App2 from './components/App';
import App from './pages/App';
import Info from './pages/Info.js';
import Home from './pages/Home.js';

ReactDOM.render((
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/home" component={Home} />
            <Route path="/atv1" component={App2} />
            <Route path="/info" component={Info} />
        </Switch>
    </BrowserRouter>
    ),
    /*
    <App2 />,
    */
    document.getElementById("app")
);

/*

            <
*/
