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

export const VIEW_MEALS = 'VIEW_MEALS';
export const viewMeals = selectedDate => ({
    type: VIEW_MEALS,
    selectedDate
});

export const ADD_MEAL = 'ADD_MEAL';
export const addMeal = meal => ({
    type: ADD_MEAL,
    meal
});

export const CHANGE_MEAL = 'CHANGE_MEAL';
export const changeMeal = meal => ({
    type: CHANGE_MEAL,
    meal
});

export const REMOVE_MEAL = 'REMOVE_MEAL';
export const removeMeal = meal => ({
    type: REMOVE_MEAL,
    meal
});

export const CHANGE_DIET = 'CHANGE_DIET';
export const changeDiet = newDiet => ({
    type: CHANGE_DIET,
    newDiet
});

export const CHANGE_STATUS = 'CHANGE_STATUS';
export const changeStatus = newStatus => ({
    type: CHANGE_STATUS,
    newStatus
});

export const SHOW_RECOMMENDATIONS = 'SHOW_RECOMMENDATIONS';
export const showRecommendations = recommendations => ({
    type: SHOW_RECOMMENDATIONS,
    recommendations
});