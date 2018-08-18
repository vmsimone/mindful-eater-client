import {API_BASE_URL} from './config.js';

export const LOG_IN = 'LOG_IN';
export const logIn = (userName, password) => ({
    type: LOG_IN,
    userName,
    password
});

export const LOG_OUT = 'LOG_OUT';
export const logOut = () => ({
    type: LOG_OUT
});

export const FETCH_MEALS_SUCCESS = 'FETCH_MEALS_SUCCESS';
export const fetchMealsSuccess = meals => ({
    type: FETCH_MEALS_SUCCESS,
    meals
});

export const fetchMeals = () => dispatch => {
    fetch(`${API_BASE_URL}/my-meals`)
        .then(res => {
            if (!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(meals => {
            dispatch(fetchMealsSuccess(meals.mealsEaten));
        })
        .catch(err => dispatch(fetchMealsSuccess(err)));
};

export const ADD_MEAL_SUCCESS = 'ADD_MEAL_SUCCESS';
export const addMealSuccess = (meal, category, nutrients) => ({
    type: ADD_MEAL_SUCCESS,
    meal,
    category,
    nutrients
});

export const addMeal = (meal, category, nutrients) => dispatch => {
    fetch(`${API_BASE_URL}/my-meals`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: meal,
            category: category,
            nutrients: nutrients,
            user: 'me'
        })
    })
        .then(res => {
            if(!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json()
        })
        .then(meal => {
            dispatch(addMealSuccess(meal.name, meal.category, meal.nutrients));
        })
        .catch(err => dispatch(addMealSuccess(err)));
};

export const CHANGE_MEAL = 'CHANGE_MEAL';
export const changeMeal = (index, updatedNutrients) => ({
    type: CHANGE_MEAL,
    index,
    updatedNutrients
});

export const REMOVE_MEAL = 'REMOVE_MEAL';
export const removeMeal = mealIndex => ({
    type: REMOVE_MEAL,
    mealIndex
});

export const CHANGE_DIET = 'CHANGE_DIET';
export const changeDiet = newDiet => ({
    type: CHANGE_DIET,
    newDiet
});

export const CHANGE_STATUS = 'CHANGE_STATUS';
export const changeStatus = () => ({
    type: CHANGE_STATUS
});

export const SHOW_RECOMMENDATIONS = 'SHOW_RECOMMENDATIONS';
export const showRecommendations = () => ({
    type: SHOW_RECOMMENDATIONS
});