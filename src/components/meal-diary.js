import React from 'react';
import {connect} from 'react-redux';

import MealForm from './meal-form.js';
import Meal from './meal.js';

import {removeMeal, fetchMeals} from '../actions';

import './meal-diary.css';

export class MealDiary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: -1,
      addingMeal: false
    }
  }

  componentDidMount() {
    this.props.dispatch(fetchMeals());
  }

  removeMeal(id, index) {
    this.props.dispatch(removeMeal(id, index));
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
          className={this.state.editing === index ? 'editing' : ''}
        >
          <Meal
            mealName={meal.name}
            nutrients={meal.nutrients}
            category={meal.category}
            editing={this.state.editing === index}
            index={index}
            id={meal.id}
            onUpdate={(index) => this.editNutrients(index)}
          />
          <button onClick={() => this.removeMeal(meal.id, index)}>Remove</button>
        </li>
      )
    });

    return (
      <div className="meal-diary">
          <main>
            <h2>Today you've eaten...</h2>
            {this.state.addingMeal ? 
              <div>
                <MealForm />
                <button onClick={() => this.setState({addingMeal: false})}>Cancel</button>
              </div> 
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