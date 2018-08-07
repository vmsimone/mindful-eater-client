import * as actions from './actions';

const initialState = {
    username: 'Demo User',
    diet: 'vegetarian',
    lifestyle: 'sedentary',
    status: 'lacking in iron',
    mealsEaten: [
        {
            "name": "Banana",
            "category": "fruits",
            "nutrients": {
                "carbs": 26.95,
                "calcium": 6,
                "fat": 0.39,
                "iron": 0.31,
                "protein": 1.29,
                "sugars": 14.43
            },
            "okayFor": ["vegan", "vegetarian", "pescetarian", "paleo", "gluten-free"],
            "user": "me"
        },
        {
            "name": "Scrambled Eggs",
            "category": "eggs",
            "nutrients": {
                "carbs": 3.22,
                "calories": 298,
                "fat": 21.96,
                "iron": 2.62,
                "protein": 9.99,
                "sugars": 2.78
            },
            "okayFor": ["vegetarian", "pescetarian", "paleo", "gluten-free"],
            "user": "me"
        },
        {
            "name": "Quinoa",
            "category": "vegetables",
            "nutrients": {
                "carbs": 39.41,
                "calories": 222,
                "fat": 3.55,
                "iron": 2.76,
                "protein": 8.14,
                "sugars": 1.61
            },
            "okayFor": ["vegan", "vegetarian", "pescetarian", "gluten-free"],
            "user": "me"
        }
    ],
    recommendations: ["lentils", "spinach"]
};

export default (state = initialState, action) => {
    if (action.type === actions.LOG_IN) {
        return Object.assign({}, state, {
            username: action.username
        });
    }
    else if (action.type === actions.LOG_OUT) {
        return Object.assign({}, state, {

        });
    }
    else if (action.type === actions.VIEW_MEALS) {
        //const {mealsEaten} = state;

        //filter mealsEaten by date in some way
        return Object.assign({}, state, {
            
        });
    }
    else if (action.type === actions.ADD_MEAL) {
        return Object.assign({}, state, {
            mealsEaten: [...state.mealsEaten, {
                "name": action.meal,
                "category": action.category,
                "nutrients": action.nutrients,
                "okayFor": [],
                "user": "me"
            }]
        });
    }
    else if (action.type === actions.CHANGE_MEAL) {
        //const {mealsEaten} = state;

        return Object.assign({}, state, {

        });
    }
    else if (action.type === actions.REMOVE_MEAL) {
        //const {mealsEaten} = state;

        return Object.assign({}, state, {

        });
    }
    else if (action.type === actions.CHANGE_DIET) {
        return Object.assign({}, state, {
            diet: action.newDiet
        });
    }
    else if (action.type === actions.CHANGE_STATUS) {
        return Object.assign({}, state, {
            status: action.newStatus
        });
    }
    else if (action.type === actions.SHOW_RECOMMENDATIONS) {
        return Object.assign({}, state, {
            recommendations: action.recommendations
        });
    }
    return state;
};