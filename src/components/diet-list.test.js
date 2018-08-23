import React from 'react';
import {shallow} from 'enzyme';
import store from '../store';

import DietList from './diet-list.js';
import {changeDiet, CHANGE_DIET} from '../actions';
import reducer from '../reducer';

describe('<DietList />', () => {
    const dispatch = jest.fn();
    it('should render', () => {
        shallow(<DietList store={store} dispatch={dispatch}/>);
    });
});

describe('changeDiet', () => {
    it('should return the action', () => {
        const diet = 'vegan';
        const action = changeDiet(diet);
        expect(action.type).toEqual(CHANGE_DIET);
        expect(action.newDiet).toEqual(diet);
    });

    it('should change the state diet', () => {
        const testDiet1 = "vegetarian";
        const testDiet2 = "paleo";
        let state = {
            diet: 'none'
        };
        state = reducer(state, changeDiet(testDiet1));
        expect(state).toEqual({
            diet: testDiet1
        });
        state = reducer(state, changeDiet(testDiet2));
        expect(state).toEqual({
            diet: testDiet2
        });
    });
});