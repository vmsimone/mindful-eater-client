import React from 'react';

export default function UserInfo(props) {
  const {userName, myDiet, myStatus, weRecommend} = props;
  return (
    <div className="UserInfo">
      <Greeting userName={userName}/>
        <section className="user-desc">
          <Diet myDiet={myDiet}/>
        </section>
        <section className="user-status">
          <Status myStatus={myStatus}/>
        </section>
        <section className="user-recommendations">
          <Reccomendations weRecommend={weRecommend}/>
        </section>
    </div>
  );
}

export default UserInfo;
