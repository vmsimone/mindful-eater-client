import React from 'react';
import { shallow } from 'enzyme';

import Lifestyle from './lifestyle.js';

describe('<Lifestyle />', () => {
    it('should render', () => {
        shallow(<Lifestyle />)
    });
});