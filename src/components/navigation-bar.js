import React from 'react';
import {Link} from 'react-router-dom';
//add username to page?

import './navigation-bar.css'

export default function NavigationBar(props) {
    return (
        <div>
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/meal-diary">What am I eating?</Link></li>
            <li><Link to="/diet">My Diet</Link></li>
            <li><Link to="/">Log Out</Link></li>
          </ul>
        </div>
    );
}