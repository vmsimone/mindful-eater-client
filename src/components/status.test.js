import React from 'react';
import { shallow } from 'enzyme';

import {Status} from './status.js';

describe('<Status />', () => {
    it('should render', () => {
        shallow(<Status weRecommend={['food', 'other food']}/>);
    });
});