import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';

import {addMeal, fetchMeals, changeStatus, showRecommendations} from '../actions';

import './meal-form.css'

export class MealForm extends React.Component {
    addMeal(name, category, nutrients) {
        this.props.dispatch(addMeal(name, category, nutrients));
        this.props.dispatch(fetchMeals());
        this.updateEvaluation();
    }

    updateEvaluation() {
        this.props.dispatch(changeStatus());
        this.props.dispatch(showRecommendations());
    }

    onSubmit(values) {
        const newMeal = {
            "name": values["meal-name"],
            "category": values.category,
            "nutrients": {
                "carbs": values.carbs,
                "calories": values.calories,
                "fat": values.fat,
                "iron": values.iron,
                "protein": values.protein,
                "sugars": values.sugars
            }
        };
        this.addMeal(newMeal.name, newMeal.category, newMeal.nutrients);
    }
    render() {
        return (
            <form
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                <label htmlFor="meal-name">Meal name:</label>
                <Field
                    name="meal-name"
                    id="meal-name"
                    type="text"
                    component="input"
                    required
                />
                <label htmlFor="category">Main Category:</label>
                <Field
                    name="category"
                    id="meal-name"
                    type="text"
                    component="select"
                    required
                >
                    <option value="">--</option>
                    <option value="fruits">Fruit</option>
                    <option value="vegetables">Vegetable</option>
                    <option value="meat">Meat/Poultry</option>
                    <option value="fish">Fish/Seafood</option>
                    <option value="dairy">Dairy</option>
                    <option value="eggs">Eggs</option>
                    <option value="bread">Bread/Grains</option>
                    <option value="sweets">Desserts/Sweets</option>
                </Field>

                <label htmlFor="calories">Calories:</label>
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
                    required
                />g
                <label htmlFor="carbs">Carbohydrates:</label>
                <Field
                    parse={value => Number(value)}
                    name="carbs"
                    id="carbs"
                    type="number"
                    component="input"
                    min={0}
                    max={10000}
                    maxLength={7}
                    step={0.1}
                    required
                />g
                <label htmlFor="fat">Fat:</label>
                <Field
                    parse={value => Number(value)}
                    name="fat"
                    id="fat"
                    type="number"
                    component="input"
                    min={0}
                    max={10000}
                    maxLength={7}
                    step={0.1}
                    required
                />g
                <label htmlFor="iron">Iron:</label>
                <Field
                    parse={value => Number(value)}
                    name="iron"
                    id="iron"
                    type="number"
                    component="input"
                    min={0}
                    max={10000}
                    maxLength={7}
                    step={0.1}
                    required
                />mg
                <label htmlFor="protein">Protein:</label>
                <Field
                    parse={value => Number(value)}
                    name="protein"
                    id="protein"
                    type="number"
                    component="input"
                    min={0}
                    max={10000}
                    maxLength={7}
                    step={0.1}
                    required
                />g
                <label htmlFor="sugars">Sugars:</label>
                <Field
                    parse={value => Number(value)}
                    name="sugars"
                    id="sugars"
                    type="number"
                    component="input"
                    min={0}
                    max={10000}
                    maxLength={7}
                    step={0.1}
                    required
                />g

                <button className="add-meal" type="submit">Add Meal</button>
            </form>
        );
    }
}

MealForm = connect()(MealForm);

export default reduxForm({
    form: 'add-meal'
})(MealForm);
