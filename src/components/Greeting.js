import React from 'react';

export default function Greeting(props) {
    const {userName} = props;
    return (
      <div>
        <h3>Welcome, {userName}!</h3>
      </div>
    );
}