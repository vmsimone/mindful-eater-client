import React from 'react';
import './Home.css';

import UserInfo from './UserInfo.js';
import NavigationBar from './NavigationBar.js';

class Home extends React.Component {
  render() {
    return (
      <div>
        <nav>
          <NavigationBar />
        </nav>
        <main>
          <UserInfo 
            userName={"Doctor"}
            myDiet={"vegan"}
            myLifestyle={"active"}
            myStatus={"lacking protein"}
            weRecommend={["spinach", "lentils"]}
          />
        </main>
      </div>
    );
  }
}

export default Home;