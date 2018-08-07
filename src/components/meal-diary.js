import React from 'react';
import {connect} from 'react-redux';

import MealForm from './meal-form.js';
import Meal from './meal.js';

import './meal-diary.css';

export class MealDiary extends React.Component {
  convertObjectToArray(obj) {
    const arr = [];
    Object.keys(obj).forEach(key => {
        arr.push(`${key}: ${obj[key]}g`);
    });
    return arr;
  }
  
  render() {
    const meals = this.props.mealsEaten.map((meal, index) => {
      const nutrientList = this.convertObjectToArray(
        meal.nutrients
      );
      return (
        <li key={index}>
          <Meal 
            mealName={meal.name}
            nutrients={nutrientList}
            category={meal.category}
          />
        </li>
      )
    });
    console.log(meals);

    return (
      <div className="MealDiary">
          <main>
            <h2>Today I've eaten...</h2>
            <MealForm />
            <p>(button under construction)</p>
            <ul className="meal-list">
              {meals}
            </ul>
          </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  mealsEaten: state.mindful.mealsEaten
});

export default connect(mapStateToProps)(MealDiary);