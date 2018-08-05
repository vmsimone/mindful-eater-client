import React from 'react';
import {connect} from 'react-redux';

import MealList from './meal-list.js';

import './meal-diary.css';

class MealDiary extends React.Component {
  convertObjectToArray(obj) {
    const arr = [];
    Object.keys(obj).forEach(key => {
        arr.push(`${key}: ${obj[key]}g`);
    });
    return arr;
  }

  render() {
    // const Meals = this.props.mealsEaten.forEach(meal => {
    //     const nutrientList = this.convertObjectToArray(
    //         this.props.mealsEaten[meal].nutrients
    //     );
    //     return (
    //         <Meal 
    //             mealName={this.props.mealsEaten[meal].name}
    //             nutrients={nutrientList}
    //             category={this.props.mealsEaten[meal].category}
    //         />
    //     )
    //         
    // })

    const firstMealNutrients = this.convertObjectToArray(
        this.props.mealsEaten[0].nutrients
    );

    const secondMealNutrients = this.convertObjectToArray(
        this.props.mealsEaten[1].nutrients
    );

    const thirdMealNutrients = this.convertObjectToArray(
        this.props.mealsEaten[2].nutrients
    );

    return (
      <div className="MealDiary">
          <main>
            <h2>Today I've eaten...</h2>
            <p>(button under construction)</p>
            <button>Add meal</button>
            <MealList mealsEaten={this.props.mealsEaten} nutrients={[
              firstMealNutrients,
              secondMealNutrients,
              thirdMealNutrients
            ]}/>
          </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  mealsEaten: state.mealsEaten
});

export default connect(mapStateToProps)(MealDiary);