import React from 'react';
import { connect } from 'react-redux';

import PremadeDiet from './premade-diet.js';

import {changeDiet} from '../actions';

import './diet-list.css';

export class DietList extends React.Component {
    changeDiet(dietName) {
        this.props.dispatch(changeDiet(dietName));
    }

    checkDiet(diet) {
        if (diet === "glutenFree") {
          return "gluten-free";
        } else {
          return diet;
        }
    }

    render() {
        return (
            <div className="Diet-List">
                <h2>Current Diet: {this.checkDiet(this.props.diet)}</h2>
                <div 
                onClick={() => this.changeDiet("none")}
                className={this.props.diet == 'none' ? 'selected' : ''}>
                    <PremadeDiet
                        dietName={"No Diet"}
                        restrictions={"I'll eat anything"}
                        iconList={["fruits", "vegetables", "meat", "fish", "bread", "dairy"]}
                    />
                </div>
                <div onClick={() => this.changeDiet("vegan")}
                className={this.props.diet == 'vegan' ? 'selected' : ''}>
                    <PremadeDiet 
                        dietName={"Vegan"} 
                        restrictions={"I don't eat animals or the things they produce"}
                        iconList={["fruits", "vegetables", "bread"]} 
                    />
                </div>
                <div onClick={() => this.changeDiet("vegetarian")}
                className={this.props.diet == 'vegetarian' ? 'selected' : ''}>
                    <PremadeDiet 
                        dietName={"Vegetarian"} 
                        restrictions={"I don't eat meat"}
                        iconList={["fruits", "vegetables", "bread", "dairy"]} 
                    />
                </div>
                <div onClick={() => this.changeDiet("pescatarian")}
                className={this.props.diet == 'pescatarian' ? 'selected' : ''}>
                    <PremadeDiet 
                        dietName={"Pescatarian"} 
                        restrictions={"I don't eat meat (except fish)"}
                        iconList={["fruits", "vegetables", "fish", "bread", "dairy"]} 
                    />
                </div>
                <div onClick={() => this.changeDiet("paleo")}
                className={this.props.diet == 'paleo' ? 'selected' : ''}>
                    <PremadeDiet 
                        dietName={"Paleo-diet"} 
                        restrictions={"I only eat foods that were available to my ancient ancestors"}
                        iconList={["fruits", "vegetables", "meat", "fish"]} 
                    />
                </div>
                <div onClick={() => this.changeDiet("glutenFree")}
                className={this.props.diet == 'glutenFree' ? 'selected' : ''}>
                    <PremadeDiet 
                        dietName={"Gluten-free"} 
                        restrictions={"I avoid wheat and grains with gluten proteins"}
                        iconList={["fruits", "vegetables", "meat", "fish", "dairy"]} 
                    />
                </div>
            </div>
        );
    };
}

const mapStateToProps = state => ({
    diet: state.mindful.diet
});

export default connect(mapStateToProps)(DietList);