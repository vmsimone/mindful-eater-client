import React from 'react';
import {reduxForm, Field} from 'redux-form';

import './meal-form.css'

export class MealForm extends React.Component {
    onSubmit(values) {
        console.log(values);
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

export default reduxForm({
    form: 'add-meal'
})(MealForm);