import React from 'react';
import { shallow } from 'enzyme';

import {UserInfo} from './user-info.js';

describe('<UserInfo />', () => {
    it('should render', () => {
        const dispatch = jest.fn();
        shallow(<UserInfo dispatch={dispatch}/>);
    });
});