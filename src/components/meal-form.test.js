import React from 'react';
import {shallow} from 'enzyme';

import {MealForm} from './meal-diary.js';

import {addMeal} from '../actions';

describe('<MealForm />', () => {
    it('should render', () => {
        const dispatch = jest.fn();
        shallow(<MealForm dispatch={dispatch}/>);
    });

    it('should dispatch addMeal on submit', () => {

    });

    it('should cancel the add when cancel is clicked', () => {

    });
});