import React from 'react';

import NavigationBar from './NavigationBar.js';
import DietList from './DietList.js';

import './DietPage.css';

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