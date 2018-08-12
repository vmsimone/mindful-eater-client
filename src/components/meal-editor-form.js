import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';

import './meal.css';

export class MealEditor extends React.Component {
    render() {
        const displayImage = {
            "fruits": {
                alt: "fruits",
                src: "https://cdn.iconscout.com/public/images/icon/free/png-512/grape-fruit-vitamin-healthy-39cab980eed07fc2-512x512.png"
            },
            "vegetables": {
                alt: "vegetables",
                src: "https://image.flaticon.com/icons/svg/184/184425.svg"
            },
            "meat": {
                alt: "meat",
                src: "https://freeiconshop.com/wp-content/uploads/edd/meat-outline-filled.png"
            },
            "fish": {
                alt: "fish",
                src: "https://banner2.kisspng.com/20180419/req/kisspng-fish-computer-icons-fish-meat-5ad8b8630cbca5.2617632615241524190522.jpg"
            },
            "bread": {
                alt: "bread",
                src: "https://cdn.iconscout.com/public/images/icon/free/png-512/bread-food-diet-bake-nutrition-bakery-323f0c9dc7d6f7b2-512x512.png"
            },
            "dairy": {
                alt: "dairy",
                src: "https://freeiconshop.com/wp-content/uploads/edd/cheese-outline-filled.png"
            },
            "eggs": {
                alt: "eggs",
                src: "https://png.icons8.com/metro/1600/eggs.png"
            },
            "sweets": {
                alt: "sweets",
                src: "https://image.flaticon.com/icons/svg/164/164659.svg"
            }
        }

        const nutrientList = this.props.nutrients.map((nutrient, index) => {
            const unit = (this.props.nutrient === "iron" ? "mg" : "g");
            return (
                <li key={index}>
                    <label>{this.props.nutrient}:</label>
                    <Field
                        parse={value => Number(value)}
                        name="calories"
                        id="calories"
                        type="number"
                        component="input"
                        min={0}
                        max={10000}
                        maxLength={7}
                        step={0.1}
                        mobile
                        required
                    />{unit}
                </li>
            )
        });

        return (
            <div className="food-item">
                <img src={displayImage[this.props.category].src} alt={displayImage[this.props.category].alt} />
                <h3>{this.props.mealName}</h3>
                <form>
                    <ul>
                        {nutrientList}
                    </ul>
                </form>
                <button className="update-nutrients" type="submit">Update</button>
            </div>
        );
    }
}

MealEditor = connect()(MealEditor);

export default reduxForm({
    form: 'edit-meal'
})(MealEditor);