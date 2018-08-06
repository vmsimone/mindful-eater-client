import React from 'react';

import Meal from './meal.js';

export default function MealList(props) {
    const {mealsEaten, nutrients} = props;
    return (
        <div className="Meal-List">
            <Meal 
                mealName={mealsEaten[0].name}
                nutrients={nutrients[0]}
                category={mealsEaten[0].category}
            />
            <Meal 
                mealName={mealsEaten[1].name}
                nutrients={nutrients[1]}
                category={mealsEaten[1].category}
            />
            <Meal 
                mealName={mealsEaten[2].name}
                nutrients={nutrients[2]}
                category={mealsEaten[2].category}
            />
        </div>
    )
}