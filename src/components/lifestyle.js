import React from 'react';
import {connect} from 'react-redux';

export class Lifestyle extends React.Component {
  checkDiet(diet) {
    if (diet === "none") {
      return "not on a diet";
    } else if (diet === "paleo") {
      return "on the paleo-diet";
    } else if (diet === "glutenFree") {
      return "gluten-free";
    } else {
      return `a ${diet}`
    }
  }
  
  render() {
    return (
      <div>
        <h3>Currently, you are:</h3> 
        <p>{this.checkDiet(this.props.myDiet)}</p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  myDiet: state.mindful.diet
});

export default connect(mapStateToProps)(Lifestyle);