import React from 'react';

import NavigationBar from './NavigationBar.js';
import MealList from './MealList.js';

import './MealDiary.css';

class MealDiary extends React.Component {
  render() {
    return (
      <div className="MealDiary">
          <main>
            <h2>Today I've eaten...</h2>
            <MealList />
          </main>
      </div>
    );
  }
}

export default MealDiary;