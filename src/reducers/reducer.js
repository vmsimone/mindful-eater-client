import {LOG_IN, 
    LOG_OUT, 
    VIEW_MEALS, 
    ADD_MEAL, 
    CHANGE_MEAL, 
    REMOVE_MEAL, 
    CHANGE_DIET, 
    CHANGE_STATUS, 
    SHOW_RECOMMENDATIONS} from './actions';

const initialState = {
    username: 'demo',
    diet: 'none',
    lifestyle: 'average',
    status: 'healthy',
    mealsEaten: [],
    recommendations: []
};

export default (state = initialState, action) => {
    if (action.type === LOG_IN) {
        return Object.assign({}, state, {
            username: action.username
        });
    }

    if (action.type === LOG_OUT) {
        return Object.assign({}, state, {

        });
    }

    if (action.type === VIEW_MEALS) {
        const {mealsEaten} = state;

        //filter mealsEaten by date in some way
        return Object.assign({}, state, {
            
        });
    }

    if (action.type === ADD_MEAL) {
        const {mealsEaten} = state;

        return Object.assign({}, state, {
            mealsEaten: [mealsEaten, action.meal]
        });
    }

    if (action.type === CHANGE_MEAL) {
        const {mealsEaten} = state;

        return Object.assign({}, state, {

        });
    }

    if (action.type === REMOVE_MEAL) {
        const {mealsEaten} = state;

        return Object.assign({}, state, {

        });
    }

    if (action.type === CHANGE_DIET) {
        return Object.assign({}, state, {
            diet: action.newDiet
        });
    }

    if (action.type === CHANGE_STATUS) {
        return Object.assign({}, state, {
            status: action.newStatus
        });
    }

    if (action.type === SHOW_RECOMMENDATIONS) {
        return Object.assign({}, state, {
            recommendations: action.recommendations
        });
    }

    return state;
};