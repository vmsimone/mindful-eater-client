import React from 'react';
import { connect } from 'react-redux';

export function Status(props) {
    return (
      <div>
        <h3>Evaluation:</h3> 
        <p>Your diet today is {props.myStatus}</p>
        <p>We recommend you try eating some {props.weRecommend[0]} and {props.weRecommend[1]}</p>
      </div>
    );
}

const mapStateToProps = state => ({
  myStatus: state.status,
  weRecommend: state.recommendations
});

export default connect(mapStateToProps)(Status);