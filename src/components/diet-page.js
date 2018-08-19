import React from 'react';
import { connect } from 'react-redux';

import DietList from './diet-list.js';
import requiresLogin from './requires-login.js';

import './diet-page.css';

class DietPage extends React.Component {
  render() {
    return (
      <div className="DietPage">
          <main>
            <DietList />
          </main>
      </div>
    );
  }
}

export default requiresLogin()(connect()(DietPage));