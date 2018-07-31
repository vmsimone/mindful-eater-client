import React from 'react';
import './Home.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import NavigationBar from './NavigationBar.js';
import UserInfo from './UserInfo.js';
import MealDiary from './MealDiary.js';
import DietPage from './DietPage.js';

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