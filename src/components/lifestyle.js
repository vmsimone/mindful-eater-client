import React from 'react';
import { connect } from 'react-redux';

export function Lifestyle(props) {
  return (
    <div>
      <h3>Currently, I am:</h3> 
      <p>a(n) {props.myLifestyle} {props.myDiet}</p>
    </div>
  );
}

const mapStateToProps = state => ({
  myDiet: state.mindful.diet,
  myLifestyle: state.mindful.lifestyle
});

export default connect(mapStateToProps)(Lifestyle);