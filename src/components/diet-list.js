import React from 'react';
import { connect } from 'react-redux';

import PremadeDiet from './premade-diet.js';

export class DietList extends React.Component {
    render() {
        // let dietProps = React.createClass({
        //     getInitialState: function() {
        //         return {focus: false}
        //     },
        //     onFocus: function() {
        //         this.setState({focus: true})
        //     },
        //     onBlur: function() {
        //         this.setState({focus: false})
        //     },
        //     getClass: function() {
        //         if(this.state.focus === true) {
        //             return "selected";
        //         } else {
        //             return "";
        //         }
        //     }
        // });

        return (
            <div className="Diet-List">
                <PremadeDiet
                    dietName={"No Diet"} 
                    restrictions={"I'll eat anything"}
                    iconList={["fruits", "vegetables", "meat", "fish", "bread", "dairy"]}
                />
                <PremadeDiet 
                    dietName={"Vegan"} 
                    restrictions={"I don't eat animals or the things they produce"}
                    iconList={["fruits", "vegetables", "bread"]} 
                />
                <PremadeDiet 
                    dietName={"Vegetarian"} 
                    restrictions={"I don't eat meat"}
                    iconList={["fruits", "vegetables", "bread", "dairy"]} 
                />
                <PremadeDiet 
                    dietName={"Pescatarian"} 
                    restrictions={"I don't eat meat (except fish)"}
                    iconList={["fruits", "vegetables", "fish", "bread", "dairy"]} 
                />
                <PremadeDiet 
                    dietName={"Paleo-diet"} 
                    restrictions={"I only eat foods that were available to my ancient ancestors"}
                    iconList={["fruits", "vegetables", "meat", "fish"]} 
                />
                <PremadeDiet 
                    dietName={"Gluten-free"} 
                    restrictions={"I avoid wheat and grains with gluten proteins"}
                    iconList={["fruits", "vegetables", "meat", "fish", "dairy"]} 
                />
            </div>
        );
    };
}

const mapStateToProps = state => ({
    diet: state.mindful.diet
});

export default connect(mapStateToProps)(DietList);