import React from 'react';
import {connect} from 'react-redux';

import Greeting from './greeting.js';
import Lifestyle from './lifestyle.js';
import Status from './status.js';
import requiresLogin from './requires-login.js';

import {fetchMeals} from '../actions';

import './user-info.css';

export function UserInfo(props) {
  props.dispatch(fetchMeals());

  return (
    <div className="user-info">
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
  username: state.mindful.username,
  myDiet: state.mindful.diet,
  myLifestyle: state.mindful.lifestyle,
  myStatus: state.mindful.status,
  weRecommend: state.mindful.recommendations
});

export default requiresLogin()(connect(mapStateToProps)(UserInfo));