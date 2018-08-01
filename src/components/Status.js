import React from 'react';
//import { connect } from 'react-redux';

export default function Status(props) {
    const {myStatus, weRecommend} = props;
    return (
      <div>
        <h3>Evaluation:</h3> 
        <p>Your diet today is {myStatus}</p>
        <p>We recommend you try eating some {weRecommend[0]} and {weRecommend[1]}</p>
      </div>
    );
}

// const mapStateToProps = state => ({
//   myStatus: state.myStatus,
//   weRecommend: state.weRecommend
// });

// export default connect(mapStateToProps)(Status);