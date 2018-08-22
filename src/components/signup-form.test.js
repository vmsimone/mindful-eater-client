import React from 'react';
import {shallow} from 'enzyme';

import {SignUp} from './navigation-bar.js';

describe('<SignUp />', () => {
    it('should render', () => {
        shallow(<SignUp />);
    });

    it('should dispatch registerUser on submit', () => {

    });

    it('should dispatch login after user is registered', () => {

    });
});