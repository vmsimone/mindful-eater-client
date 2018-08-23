import React from 'react';
import {shallow} from 'enzyme';

import store from '../store';

import {SignUp} from './signup-form.js';

describe('<SignUp />', () => {
    it('should render', () => {
        shallow(<SignUp store={store} />);
    });

//     it('should dispatch registerUser on submit', () => {

//     });

//     it('should dispatch login after user is registered', () => {

//     });
});