import React from 'react';
import {shallow} from 'enzyme';

import {Status} from './status.js';

describe('<Status />', () => {
    it('should render', () => {
        const dispatch = jest.fn();
        shallow(
            <Status 
                myStats={"Just fine"} 
                weRecommend={['food', 'other food']}
                dispatch={dispatch}
            />
        );
    });
});