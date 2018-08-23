import React from 'react';
import {shallow} from 'enzyme';

import {LandingPage} from './landing-page.js';

describe('<LandingPage />', () => {
  it('should render', () => {
    shallow(<LandingPage />);
  }); 
});