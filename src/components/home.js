import React from 'react';
import './home.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import NavigationBar from './navigation-bar.js';
import UserInfo from './user-info.js';
import MealDiary from './meal-diary.js';
import DietPage from './diet-page.js';
import LandingPage from './landing-page.js';
import Login from './login-form.js';
import SignUp from './signup-form.js';

class Home extends React.Component {
  render() {
    return (
      <Router>
        <div>
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

export default Home;
