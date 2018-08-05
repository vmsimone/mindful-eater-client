import React from 'react';
import { shallow } from 'enzyme';

import MealList from './meal-list.js';

describe('<MealList />', () => {
    it('should render', () => {
        const seedMeals = [
            {
                "name": "Banana",
                "category": "fruits"
            },
            {
                "name": "Scrambled Eggs",
                "category": "eggs"
            },
            {
                "name": "Quinoa",
                "category": "vegetables"
            }
        ];
        const seedNutrients = ["vitams: lots", "vitams: a bunch", "vitams: many"];
        shallow(<MealList mealsEaten={seedMeals} nutrients={seedNutrients}/>);
    });
});