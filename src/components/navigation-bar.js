import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {clearAuth} from '../actions/auth';
import {clearAuthToken} from '../local-storage';

import './navigation-bar.css'

export class NavigationBar extends React.Component {
    logOut() {
      this.props.dispatch(clearAuth());
      clearAuthToken();
    }

    render() {
      let visibleLinks;
      if (this.props.loggedIn) {
        visibleLinks =
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/meal-diary">What am I eating?</Link></li>
            <li><Link to="/diet">My Diet</Link></li>
            <li><Link to="/" onClick={() => this.logOut()}>Log Out</Link></li>
          </ul>
        ;
      } else {
        visibleLinks =
          <ul>
            <li><Link to="/login">Log In</Link></li>
            <li><Link to="/signup">Sign up</Link></li>
          </ul>
        ;
      }
      return (
        <div>
          {visibleLinks}
        </div>
      );
    }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(NavigationBar);