import React from 'react';
import {shallow, mount} from 'enzyme';

import {login} from '../actions/auth';

import {Login, reduxForm} from './login-form.js';

describe('<Login />', () => {
    it('should render', () => {
        const dispatch = jest.fn();
        const handleSubmit = jest.fn();
        shallow(<Login dispatch={dispatch} handleSubmit={handleSubmit}/>);
    });

    it('should dispatch login action on submit', () => {
        const dispatch = jest.fn();
        const handleSubmit = jest.fn();
        const wrapper = mount(<Login dispatch={dispatch} handleSubmit={handleSubmit}/>);
        const testUser = 'testerson';
        const testPass = 'passtest';
        wrapper.find('input[name="username"]').instance().value = testUser;
        wrapper.find('input[name="password"]').instance().value = testPass;
        wrapper.simulate('submit');
        expect(dispatch).toHaveBeenCalledWith(login(testUser, testPass));
    });
});