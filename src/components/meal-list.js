import React from 'react';
import {connect} from 'react-redux';

import Meal from './meal.js';

export class MealList extends React.Component {

    convertObjectToArray(obj) {
        const arr = [];
        Object.keys(obj).map(key => {
            arr.push(`${key}: ${obj[key]}g`);
        });
        return arr;
    }

    render () {
        // const Meals = this.props.mealsEaten.forEach(meal => {
        //     const nutrientList = this.convertObjectToArray(
        //         this.props.mealsEaten[meal].nutrients
        //     );

        //         <Meal 
        //             mealName={this.props.mealsEaten[meal].name}
        //             nutrients={nutrientList}
        //             category={"fruits"}
        //         />
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
            <div className="Meal-List">
                <Meal 
                    mealName={this.props.mealsEaten[0].name}
                    nutrients={firstMealNutrients}
                    category={this.props.mealsEaten[0].category}
                />
                <Meal 
                    mealName={this.props.mealsEaten[1].name}
                    nutrients={secondMealNutrients}
                    category={this.props.mealsEaten[1].category}
                />
                <Meal 
                    mealName={this.props.mealsEaten[2].name}
                    nutrients={thirdMealNutrients}
                    category={this.props.mealsEaten[2].category}
                />
            </div>
        )
    };
}

const mapStateToProps = state => ({
    mealsEaten: state.mealsEaten
});

export default connect(mapStateToProps)(MealList);