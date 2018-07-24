import React from 'react';
import './NavigationBar.css'

export default function NavigationBar() {
    return (
      <div>
        <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/meals">What am I eating?</a></li>
            <li><a href="/diet">My diet</a></li>
            <li><a href="/info">Log Out</a></li>
        </ul>
      </div>
    );
}