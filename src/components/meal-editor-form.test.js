import React from 'react';
import {shallow} from 'enzyme';

import {MealEditor} from './meal-diary.js';

import {changeMeal} from '../actions';

describe('<MealEditor />', () => {
    it('should render', () => {
        const dispatch = jest.fn();
        shallow(<MealEditor dispatch={dispatch}/>);
    });

    it('should dispatch changeMeal on submit', () => {

    });

    it('should cancel the change when cancel is clicked', () => {

    });
});