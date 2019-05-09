
import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter, Route } from 'react-router-dom';

import App2 from './components/App';
import App from './pages/App';
import Info from './pages/Info.js';
import Cursos from './pages/Cursos.js';

ReactDOM.render((
    <HashRouter>
        <Route patch="/" component={App}>
            <Route patch="/cursos" component={Cursos} />
            <Route patch="/info" component={Info} />
        </Route>

    </HashRouter>
    ),
    /*
    <App2 />,
    */
    document.getElementById("app")
);

/*


*/
