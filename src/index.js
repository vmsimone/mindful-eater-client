import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';

import store from './store';

import Home from './components/home';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Home />
        </Router>
    </Provider>, 
    document.getElementById('root')
);
