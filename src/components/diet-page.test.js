import React from 'react';
import { shallow } from 'enzyme';
import store from '../store';

import DietPage from './diet-list.js';

describe('<DietPage />', () => {
    it('should render', () => {
        shallow(<DietPage store={store}/>);
    });
});