import React from 'react';

import NavigationBar from './NavigationBar.js';

class Diet extends React.Component {
  render() {
    return (
      <div className="Diet">
        <header className="Diet-header">
        </header>
        <body>
          <nav>
            <NavigationBar />
          </nav>
          <main>
            <div>
              <p>Diet page is working</p>
            </div>
          </main>
        </body>
      </div>
    );
  }
}

export default Diet;