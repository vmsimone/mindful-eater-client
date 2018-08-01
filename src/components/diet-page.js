import React from 'react';

import DietList from './diet-list.js';

import './diet-page.css';

class DietPage extends React.Component {
  render() {
    return (
      <div className="DietPage">
          <main>
            <p>Diet page is working</p>
            <DietList />
          </main>
      </div>
    );
  }
}

export default DietPage;