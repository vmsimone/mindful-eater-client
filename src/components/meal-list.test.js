import React from 'react';
import { shallow } from 'enzyme';

import MealList from './meal-list.js';

describe('<MealList />', () => {
    it('should render', () => {
        shallow(<MealList />);
    });
});