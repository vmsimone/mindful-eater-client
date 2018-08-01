import React from 'react';

import './premade-diet.css';

export default function PremadeDiet(props) {
    const {dietName, restrictions} = props;
    return (
        <div className="diet">
          <h3>{dietName}</h3>
          <p>{restrictions}</p>
          <p>[food icons below]</p>
          <ul className="icon-list">
            <li><img className="mini-icon" /></li>
            <li><img className="mini-icon" /></li>
            <li><img className="mini-icon" /></li>
          </ul>
        </div>
    );
}