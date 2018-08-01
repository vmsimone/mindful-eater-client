import React from 'react';
import { shallow } from 'enzyme';

import PremadeDiet from './premade-diet.js';

describe('<PremadeDiet />', () => {
    it('should render', () => {
        shallow(<PremadeDiet iconList={["vegetables", "fruits"]}/>);
    });
});