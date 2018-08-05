import React from 'react';
import { shallow } from 'enzyme';
import {store} from '../store';

import {MealList} from './meal-list.js';

describe('<MealList />', () => {
    it('should render', () => {
        shallow(<MealList store={store} mealsEaten={[
            {
                "nutrients": {
                    "carbs": 26.95,
                    "calcium": 6,
                    "fat": 0.39,
                    "iron": 0.31,
                    "protein": 1.29,
                    "sugars": 14.43
                }
            },
            {
                "nutrients": {
                    "carbs": 26.95,
                    "calcium": 6,
                    "fat": 0.39,
                    "iron": 0.31,
                    "protein": 1.29,
                    "sugars": 14.43
                }
            },
            {
                "nutrients": {
                    "carbs": 26.95,
                    "calcium": 6,
                    "fat": 0.39,
                    "iron": 0.31,
                    "protein": 1.29,
                    "sugars": 14.43
                }
            }
        ]} />);
    });
});