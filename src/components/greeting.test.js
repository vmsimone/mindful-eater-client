import React from 'react';
import { shallow } from 'enzyme';

import Greeting from './greeting.js';

describe('<Greeting />', () => {
    it('should render', () => {
        shallow(<Greeting />);
    });
});