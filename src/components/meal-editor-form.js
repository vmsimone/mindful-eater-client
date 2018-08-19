import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';

import {changeMeal, fetchMeals} from '../actions';

import './meal.css';

export class MealEditor extends React.Component {
    changeMeal(index, id, nutrientObj) {
        this.props.dispatch(changeMeal(index, id, nutrientObj));
        this.props.dispatch(fetchMeals());
    }
    
    onSubmit(values) {
        this.changeMeal(this.props.index, this.props.id, values);
        this.props.onUpdate(-1);
    }

    render() {
        const nutrientArray = ["calories", "carbs", "fat", "iron", "protein", "sugars"]
        const nutrientList = nutrientArray.map((nutrient, index) => {
            const unit = (nutrient === "iron" ? "mg" : "g");
            return (
                <li key={index}>
                    <label>{nutrient}:</label>
                    <Field
                        parse={value => Number(value)}
                        name={nutrient}
                        id={nutrient}
                        type="number"
                        component="input"
                        min={0}
                        max={10000}
                        maxLength={7}
                        step={0.1}
                        required
                    />{unit}
                </li>
            )
        });

        return (
            <form onSubmit={this.props.handleSubmit(values =>
                this.onSubmit(values)
            )}>
                {nutrientList}
                <br />
                <button className="update-nutrients" type="submit">Update</button>
                <button type="button" onClick={() => this.props.onCancel()}>Cancel</button>
            </form>
        );
    }
}

MealEditor = connect()(MealEditor);

export default reduxForm({
    form: 'edit-meal'
})(MealEditor);