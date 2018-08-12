import * as actions from './actions';

const initialState = {
    username: 'Demo User',
    diet: 'none',
    lifestyle: 'sedentary', //lifestyle not currently used
    status: 'Click Refresh',
    mealsEaten: [
    ],
    recommendations: ""
};

const dailyRecommendedNutrients = {
    carbs: 275,
    iron: 13,
    protein: 51,
    fat: 60,
    sugars: 32
}

const possibleRecommendations = {
    vegan: {
        carbs: ["apples",  "oranges"],
        iron: ["tofu",  "lentils"],
        protein: ["almonds",  "broccoli"],
        fat: ["avocados",  "dark chocolate"],
        sugars: ["berries", "fruit"]
    },
    vegetarian: {
        carbs: ["bananas",  "oranges"],
        iron: ["cashews",  "spinach"],
        protein: ["quinoa",  "oats"],
        fat: ["cheese",  "nuts"],
        sugars: ["berries", "fruit"]
    },
    pescatarian: {
        carbs: ["sweet potatoes",  "beets"],
        iron: ["oysters",  "potatoes"],
        protein: ["shrimp",  "tuna"],
        fat: ["fish",  "eggs"],
        sugars: ["berries", "fruit"]
    },
    glutenFree: {
        carbs: ["quinoa",  "oats"],
        iron: ["turkey",  "beef"],
        protein: ["chicken",  "brussel sprouts"],
        fat: ["olive oil",  "yogurt"],
        sugars: ["berries", "fruit"]
    },
    paleo: {
        carbs: ["bananas",  "beets"],
        iron: ["beef",  "chicken"],
        protein: ["eggs",  "turkey"],
        fat: ["fish",  "nuts"],
        sugars: ["berries", "fruit"]
    },
    none: {
        carbs: ["sweet potatoes",  "beets"],
        iron: ["turkey",  "beef"],
        protein: ["almonds",  "broccoli"],
        fat: ["olive oil",  "yogurt"],
        sugars: ["berries", "fruit"]
    }
}

function sumNutrients(mealsEaten) {
    let totalCalories = 0;
    let totalCarbs =  0;
    let totalIron =  0;
    let totalProtein =  0;
    let totalFat =  0;
    let totalSugar =  0;

    mealsEaten.forEach(meal => {
        totalCalories += meal.nutrients.calories;
        totalCarbs += meal.nutrients.carbs;
        totalIron += meal.nutrients.iron;
        totalProtein += meal.nutrients.protein;
        totalFat += meal.nutrients.fat;
        totalSugar += meal.nutrients.sugars;
    });
    const totals = {
        calories: Math.round( totalCalories * 10) / 10,
        carbs: Math.round( totalCarbs * 10) / 10,
        iron: Math.round( totalIron * 10) / 10,
        protein: Math.round( totalProtein * 10) / 10,
        fat: Math.round( totalFat * 10) / 10,
        sugars: Math.round( totalSugar * 10) / 10
    };
    return totals;
}

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
        console.log(action.newDiet);
        return Object.assign({}, state, {
            diet: action.newDiet
        });
    }
    else if (action.type === actions.CHANGE_STATUS) {
        const {mealsEaten} = state;
        const totalNutrients = sumNutrients(mealsEaten);

        return Object.assign({}, state, {
            status: `You've eaten:
            ${totalNutrients.calories} calories,
            ${totalNutrients.carbs}g of carbohydrates,
            ${totalNutrients.fat}g of fat,
            ${totalNutrients.iron}mg of iron,
            ${totalNutrients.protein}g of protein, and
            ${totalNutrients.sugars}g of sugar
            `
        });
    }
    else if (action.type === actions.SHOW_RECOMMENDATIONS) {
        const {mealsEaten} = state;
        const totalNutrients = sumNutrients(mealsEaten);

        let lacking =  "none";
        let overeating =  "none";
        let lowestRatio =  0.7;
        let highestRatio =  1.5;

        let weRecommend;

        Object.keys(totalNutrients).forEach(nutrient => {
            console.log(totalNutrients[nutrient]);
            const ratio = (totalNutrients[nutrient] / dailyRecommendedNutrients[nutrient]);
            console.log(ratio);
            if (ratio < 0.7 && ratio < lowestRatio) {
                lacking = nutrient;
                lowestRatio = ratio;
            }
            else if(ratio > 1.5 && ratio > highestRatio) {
                overeating = nutrient;
                highestRatio = ratio;
            }
        });

        if (lacking ===  "none" && overeating === "none") {
            weRecommend = "You're eating quite healthy today!";
        } else if (lacking === "none") {
            weRecommend = `You've eaten a lot of ${overeating} today.`;
        } else {
            weRecommend = `
                Your diet is lacking in ${lacking}.
                We recommend eating some ${possibleRecommendations[state.diet][lacking][0]}
                and ${possibleRecommendations[state.diet][lacking][1]}.
            `;
        }

        if (mealsEaten.length === 0) {
            weRecommend = 'Are you fasting? Have something to eat!'
        }

        return Object.assign({}, state, {
            recommendations: weRecommend
        });
    }
    return state;
};
