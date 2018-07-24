import React from 'react';

export default function Status(props) {
    const {myStatus, weRecommend} = props;
    return (
      <div>
        <h3>Evaluation:</h3> 
        <p>Your diet today {myStatus}</p>
        <p>We recommend you try eating some {weRecommend[0]} and {weRecommend[1]}</p>
      </div>
    );
}

export default Status;
