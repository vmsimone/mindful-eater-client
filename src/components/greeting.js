import React from 'react';
import { connect } from 'react-redux';

export function Greeting(props) {
    return (
      <div>
        <h2>Welcome, {props.username}!</h2>
      </div>
    );
}

const mapStateToProps = state => ({
  username: state.mindful.username
});

export default connect(mapStateToProps)(Greeting);