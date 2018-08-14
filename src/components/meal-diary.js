import React from 'react';
import {connect} from 'react-redux';

import MealForm from './meal-form.js';
import Meal from './meal.js';

import './meal-diary.css';

export class MealDiary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: -1,
      addingMeal: false
    }
  }

  editNutrients(index) {
    this.setState({
      editing: index
    });
  }
  
  render() {
    const meals = this.props.mealsEaten.map((meal, index) => {
      return (
        <li
          key={index}
          onClick={() => this.editNutrients(index)}
          className={this.state.editing === index ? 'editing' : ''}
        >
          <Meal
            mealName={meal.name}
            nutrients={meal.nutrients}
            category={meal.category}
            editing={this.state.editing === index}
            index={index}
            onUpdate={(index) => this.editNutrients(index)}
          />
          <button>Remove</button>
        </li>
      )
    });

    return (
      <div className="MealDiary">
          <main>
            <h2>Today I've eaten...</h2>
            {this.state.addingMeal ? 
              <MealForm /> 
              : 
              <button onClick={() => this.setState({addingMeal: true})}>Eat something</button>
            }
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