import React from 'react';
import {shallow} from 'enzyme';
import store from '../store';

import DietList from './diet-list.js';

describe('<DietList />', () => {
    const dispatch = jest.fn();
    it('should render', () => {
        shallow(<DietList store={store} dispatch={dispatch}/>);
    });
});