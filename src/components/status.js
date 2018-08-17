import React from 'react';
import { connect } from 'react-redux';

import {changeStatus, showRecommendations} from '../actions';

export class Status extends React.Component {
  updateEvaluation() {
    this.props.dispatch(changeStatus());
    this.props.dispatch(showRecommendations());
  }

  render() {
    return (
      <div>
        <h3>Evaluation:</h3> 
        <div>{this.props.myStatus}</div>
        <p>{this.props.weRecommend}</p>
        <button onClick={() => {this.updateEvaluation()} }>Refresh</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  myStatus: state.mindful.status,
  weRecommend: state.mindful.recommendations
});

export default connect(mapStateToProps)(Status);