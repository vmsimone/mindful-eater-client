import React from 'react';
import { shallow } from 'enzyme';
import store from '../store';

import DietList from './diet-list.js';

describe('<DietList />', () => {
    it('should render', () => {
        shallow(<DietList store={store}/>);
    });
});