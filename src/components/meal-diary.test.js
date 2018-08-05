import React from 'react';
import { shallow } from 'enzyme';
import store from '../store';

import MealDiary from './meal-diary.js';

describe('<MealDiary />', () => {
    it('should render', () => {
        shallow(<MealDiary store={store} />);
    });
});