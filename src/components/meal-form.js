import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';

import {addMeal} from '../actions';

import './meal-form.css'

export class MealForm extends React.Component {
    addMeal(name, category, nutrients) {
        console.log('add meal called');
        this.props.dispatch(addMeal(name, category, nutrients));
    }

    onSubmit(values) {
        console.log('submitted');
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
        console.log(newMeal);
        this.addMeal(newMeal.name, newMeal.category, newMeal.nutrients);
    }
    render() {
        return (
            <form
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values) 
                )}>
                <label htmlFor="meal-name">Meal name:</label>
                <Field name="meal-name" id="meal-name" type="text" component="input" />

                <label htmlFor="category">Category:</label>
                <Field name="category" id="category" component="select">
                    <option value="fruits">Fruit</option>
                    <option value="vegetables">Vegetable</option>
                    <option value="meat">Meat</option>
                    <option value="fish">Fish</option>
                    <option value="dairy">Dairy</option>
                    <option value="eggs">Eggs</option>
                    <option value="bread">Bread</option>
                </Field>

                <label htmlFor="carbs">Carbohydrates:</label>
                <Field name="carbs" id="carbs" type="number" component="input" />
                <label htmlFor="calories">Calories:</label>
                <Field name="calories" id="calories" type="number" component="input" />
                <label htmlFor="fat">Fat:</label>
                <Field name="fat" id="fat" type="number" component="input" />
                <label htmlFor="iron">Iron:</label>
                <Field name="iron" id="iron" type="number" component="input" />
                <label htmlFor="protein">Protein:</label>
                <Field name="protein" id="protein" type="number" component="input" />
                <label htmlFor="sugars">Sugars:</label>
                <Field name="sugars" id="sugars" type="number" component="input" />

                <button className="add-meal" type="submit">Add Meal</button>
            </form>
        );
    }
}

MealForm = connect()(MealForm);

export default reduxForm({
    form: 'add-meal'
})(MealForm);