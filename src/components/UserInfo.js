import React from 'react';

import Greeting from './Greeting.js';
import Lifestyle from './Lifestyle.js';
import Status from './Status.js';

export default function UserInfo(props) {
  const {userName, myDiet, myLifestyle, myStatus, weRecommend} = props;
  return (
    <div className="UserInfo">
      <Greeting userName={userName}/>
        <section className="user-desc">
          <Lifestyle myDiet={myDiet} myLifestyle={myLifestyle}/>
        </section>
        <section className="user-status">
          <Status myStatus={myStatus} weRecommend={weRecommend}/>
        </section>
    </div>
  );
}
