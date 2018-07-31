import React from 'react';

import './PremadeDiet.css';

export default function PremadeDiet() {
    const dietName = "Diet Name"
    const restriction = "some food";
    return (
        <div className="diet">
          <h3>{dietName}</h3>
          <p>I don't eat {restriction}</p>
          <p>[food icons below]</p>
          <ul className="icon-list">
            <li><img className="mini-icon" /></li>
            <li><img className="mini-icon" /></li>
            <li><img className="mini-icon" /></li>
          </ul>
        </div>
    );
}