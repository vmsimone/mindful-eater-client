import React from 'react';
import {connect} from 'react-redux';

import MealForm from './meal-form.js';
import Meal from './meal.js';
import MealEditor from './meal-editor-form';

import './meal-diary.css';

export class MealDiary extends React.Component {
  convertObjectToArray(obj) {
    const arr = [];
    Object.keys(obj).forEach(key => {
        arr.push(`${key}: ${obj[key]}g`);
    });
    return arr;
  }

  editNutrients() {

  }
  
  render() {
    const meals = this.props.mealsEaten.map((meal, index) => {
      const nutrientList = this.convertObjectToArray(
        meal.nutrients
      );
      return (
        <li
          key={index}
          onClick={() => console.log(meal.nutrients)}
          className={this.props.editing === true ? 'editing' : ''}
        >
            <Meal
              mealName={meal.name}
              nutrients={nutrientList}
              category={meal.category}
            />
            <button>Remove</button>
        </li>
      )
    });

    return (
      <div className="MealDiary">
          <main>
            <h2>Today I've eaten...</h2>
            <MealForm />
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