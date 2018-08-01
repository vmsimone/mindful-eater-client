import React from 'react';
import { shallow } from 'enzyme';

import NavigationBar from './navigation-bar.js';

describe('<NavigationBar />', () => {
    it('should render', () => {
        shallow(<NavigationBar />);
    });
});