import React from 'react';
import { shallow } from 'enzyme';

import Meal from './meal.js';

describe('<Meal />', () => {
    it('should render', () => {
        shallow(<Meal />);
    });
});