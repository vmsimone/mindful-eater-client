import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import Home from './Home.js';
import Diet from './Diet.js';
import MealDiary from './MealDiary.js';

import './NavigationBar.css'

export default function NavigationBar(props) {
    return (
      <Router>
        <div>
          <ul>
              <li><Link to="/home">Home</Link></li>
              <li><Link to="/meal-diary">What am I eating?</Link></li>
              <li><Link to="/diet">My diet</Link></li>
              <li><a href="/info">Log Out</a></li>
          </ul>
          <Route path="/home" component={Home} />
          <Route exact path="/diet" component={Diet} />
          <Route exact path="/meal-diary" component={MealDiary} />
        </div>
      </Router>
    );
}