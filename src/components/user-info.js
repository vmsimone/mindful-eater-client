import React from 'react';
import {connect} from 'react-redux';

import Greeting from './greeting.js';
import Lifestyle from './lifestyle.js';
import Status from './status.js';

export function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Greeting username={props.username}/>
        <section className="desc">
          <Lifestyle myDiet={props.myDiet} myLifestyle={props.myLifestyle}/>
        </section>
        <section className="user-status">
          <Status myStatus={props.status} weRecommend={props.weRecommend}/>
        </section>
    </div>
  );
}

const mapStateToProps = state => ({
  username: state.username,
  myDiet: state.diet,
  myLifestyle: state.lifestyle,
  myStatus: state.status,
  weRecommend: state.recommendations
});

export default connect(mapStateToProps)(UserInfo);