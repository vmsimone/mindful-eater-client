import React from 'react';

import MealList from './meal-list.js';

import './meal-diary.css';

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