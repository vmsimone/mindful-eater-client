import React from 'react';

export default function Diet(props) {
    const {myDiet, myLifestyle} = props;
    return (
      <div>
        <h3>Currently, I am:</h3> 
        <p>a(n) {myLifestyle} {myDiet}</p>
      </div>
    );
}