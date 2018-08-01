import React from 'react';
import './home.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import NavigationBar from './navigation-bar.js';
import UserInfo from './user-info.js';
import MealDiary from './meal-diary.js';
import DietPage from './diet-page.js';

class Home extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <nav>
            <NavigationBar />
          </nav>
          <main>
          <Route exact path="/" component={UserInfo} />
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