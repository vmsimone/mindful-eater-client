import React from 'react';

import NavigationBar from './NavigationBar.js';

class MealDiary extends React.Component {
  render() {
    return (
      <div className="MealDiary">
        <header className="MealDiary-header">
        </header>
        <body>
          <nav>
            <NavigationBar />
          </nav>
          <main>
            <div>
              <p>MealDiary has loaded</p>
            </div>
          </main>
        </body>
      </div>
    );
  }
}

export default MealDiary;