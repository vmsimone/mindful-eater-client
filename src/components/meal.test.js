import React from 'react';
import {shallow} from 'enzyme';

import Meal from './meal.js';

describe('<Meal />', () => {
    it('should render', () => {
        shallow(<Meal 
            mealName={"Meal"}
            nutrients={["vitamins: plenty"]}
            category={"fruits"}
        />);
    });

    it('should display the nutrients by default', () => {
        const wrapper = shallow(<Meal 
            mealName={"Meal"}
            nutrients={["vitamins: plenty"]}
            category={"fruits"}
        />);
        expect(wrapper.find('ul div').hasClass('nutrient-list'));
    });

    it('should activate editing when editing is true', () => {
        const wrapper = shallow(<Meal 
            mealName={"Meal"}
            nutrients={["vitamins: plenty"]}
            category={"fruits"}
            editing={true}
        />);
        expect(wrapper.find('ul div').length).toBe(0);
    });
});