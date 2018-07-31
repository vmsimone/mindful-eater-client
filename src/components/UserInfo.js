import React from 'react';

import Greeting from './Greeting.js';
import Lifestyle from './Lifestyle.js';
import Status from './Status.js';

export default function UserInfo() {
  return (
    <div className="UserInfo">
      <Greeting userName={"Doctor"}/>
        <section className="desc">
          <Lifestyle myDiet={"vegan"} myLifestyle={"active"}/>
        </section>
        <section className="user-status">
          <Status myStatus={"lacking protein"} weRecommend={["spinach", "lentils"]}/>
        </section>
    </div>
  );
}
