import React from 'react';
import {shallow} from 'enzyme';

import store from '../store';

import MealDiary from './meal-diary.js';
import {fetchMeals} from '../actions';

describe('<MealDiary />', () => {
    it('should do nothing', () => {
        const dispatch = jest.fn();
        shallow(<MealDiary store={store} dispatch={dispatch} />);
    });

    it('should have an add button by default', () => {
        const dispatch = jest.fn();
        const wrapper = shallow(<MealDiary store={store} dispatch={dispatch} />);
        expect(wrapper.hasClass('meal-diary')).toEqual(true);
    });

    it('should render a form when add button is clicked', () => {
        const wrapper = shallow(<MealDiary store={store} />);
        wrapper.instance().addingMeal(true);
        wrapper.update();
        expect(wrapper.hasClass('something')).toEqual(true);
    });

    it('should pass a callback function to a <Meal />', () => {

    });
});

describe('fetchMeals', () => {
    it('should return the action', () => {
        const user1 = "someguy";
        const action = fetchMeals(user1);
        expect(action.user).toEqual(user1);
    });

    it('should dispatch when the component is mounted', () => {
        
    });
});

describe('removeMeal', () => {
    it('should return the action', () => {

    });

    it('should dispatch when the remove button is clicked', () => {
        
    });
})