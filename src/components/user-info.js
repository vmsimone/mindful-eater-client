import React from 'react';

import Greeting from './greeting.js';
import Lifestyle from './lifestyle.js';
import Status from './status.js';

export default function UserInfo() {
  return (
    <div className="UserInfo">
      <Greeting username={"Doctor"}/>
        <section className="desc">
          <Lifestyle myDiet={"vegan"} myLifestyle={"active"}/>
        </section>
        <section className="user-status">
          <Status myStatus={"lacking protein"} weRecommend={["spinach", "lentils"]}/>
        </section>
    </div>
  );
}
