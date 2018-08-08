import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';

import {addMeal, changeStatus, showRecommendations} from '../actions';

import './meal-form.css'

export class MealForm extends React.Component {
    addMeal(name, category, nutrients) {
        this.props.dispatch(addMeal(name, category, nutrients));
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
        }
        this.addMeal(newMeal.name, newMeal.category, newMeal.nutrients);
        this.updateEvaluation();
    }
    render() {
        return (
            <form
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values) 
                )}>
                <label htmlFor="meal-name">Meal name:</label>
                <Field name="meal-name" id="meal-name" type="text" component="input" required />

                <label htmlFor="category">Category:</label>
                <Field name="category" id="category" component="select" required>
                    <option value="fruits">Fruit</option>
                    <option value="vegetables">Vegetable</option>
                    <option value="meat">Meat</option>
                    <option value="fish">Fish</option>
                    <option value="dairy">Dairy</option>
                    <option value="eggs">Eggs</option>
                    <option value="bread">Bread</option>
                </Field>

                <label htmlFor="carbs">Carbohydrates:</label>
                <Field parse={value => Number(value)} name="carbs" id="carbs" type="number" component="input" required />
                <label htmlFor="calories">Calories:</label>
                <Field parse={value => Number(value)} name="calories" id="calories" type="number" component="input" required />
                <label htmlFor="fat">Fat:</label>
                <Field parse={value => Number(value)} name="fat" id="fat" type="number" component="input" required />
                <label htmlFor="iron">Iron:</label>
                <Field parse={value => Number(value)} name="iron" id="iron" type="number" component="input" required />
                <label htmlFor="protein">Protein:</label>
                <Field parse={value => Number(value)} name="protein" id="protein" type="number" component="input" required />
                <label htmlFor="sugars">Sugars:</label>
                <Field parse={value => Number(value)} name="sugars" id="sugars" type="number" component="input" required />

                <button className="add-meal" type="submit">Add Meal</button>
            </form>
        );
    }
}

MealForm = connect()(MealForm);

export default reduxForm({
    form: 'add-meal'
})(MealForm);