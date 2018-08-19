import React from 'react';
import {BrowserRouter as Router, Route, withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import {refreshAuthToken} from '../actions/auth';

import NavigationBar from './navigation-bar.js';
import UserInfo from './user-info.js';
import MealDiary from './meal-diary.js';
import DietPage from './diet-page.js';
import LandingPage from './landing-page.js';
import Login from './login-form.js';
import SignUp from './signup-form.js';

import './home.css';

export class Home extends React.Component {
  componentDidUpdate(prevProps) {
    if (!prevProps.loggedIn && this.props.loggedIn) {
        this.startPeriodicRefresh();
    } else if (prevProps.loggedIn && !this.props.loggedIn) {
        this.stopPeriodicRefresh();
    }
  }

  componentWillUnmount() {
    this.stopPeriodicRefresh();
  }

  startPeriodicRefresh() {
      this.refreshInterval = setInterval(
          () => this.props.dispatch(refreshAuthToken()),
          60 * 60 * 1000
      );
  }

  stopPeriodicRefresh() {
      if (!this.refreshInterval) {
          return;
      }

      clearInterval(this.refreshInterval);
  }

  render() {
    return (
      <Router>
        <div className="home">
          <nav>
            <NavigationBar />
          </nav>
          <main>
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={SignUp} />
            <Route exact path="/home" component={UserInfo} />
            <Route exact path="/meal-diary" component={MealDiary} />
            <Route exact path="/diet" component={DietPage} />
          </main>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  hasAuthToken: state.auth.authToken !== null,
  loggedIn: state.auth.currentUser !== null
});

export default withRouter(connect(mapStateToProps)(Home));
