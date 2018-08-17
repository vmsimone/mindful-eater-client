import React from 'react';

import MealEditor from './meal-editor-form.js';

import './meal.css';

export default function Meal (props) {
    const {mealName, nutrients, category, editing, index} = props;

    const displayImage = {
        "fruits": {
            alt: "fruits",
            src: "https://cdn.iconscout.com/public/images/icon/free/png-512/grape-fruit-vitamin-healthy-39cab980eed07fc2-512x512.png"
        },
        "vegetables": {
            alt: "vegetables",
            src: "https://image.flaticon.com/icons/svg/184/184425.svg"
        },
        "meat": {
            alt: "meat",
            src: "https://freeiconshop.com/wp-content/uploads/edd/meat-outline-filled.png"
        },
        "fish": {
            alt: "fish",
            src: "https://banner2.kisspng.com/20180419/req/kisspng-fish-computer-icons-fish-meat-5ad8b8630cbca5.2617632615241524190522.jpg"
        },
        "bread": {
            alt: "bread",
            src: "https://cdn.iconscout.com/public/images/icon/free/png-512/bread-food-diet-bake-nutrition-bakery-323f0c9dc7d6f7b2-512x512.png"
        },
        "dairy": {
            alt: "dairy",
            src: "https://freeiconshop.com/wp-content/uploads/edd/cheese-outline-filled.png"
        },
        "eggs": {
            alt: "eggs",
            src: "https://png.icons8.com/metro/1600/eggs.png"
        },
        "sweets": {
            alt: "sweets",
            src: "https://image.flaticon.com/icons/svg/164/164659.svg"
        }
    }

    const nutrientArray = [];
    Object.keys(nutrients).forEach(nutrientName => {
        nutrientArray.push([nutrientName, nutrients[nutrientName]]);
    });

    const nutrientList = nutrientArray.map((nutrient, index) => {
        let nutrientName = nutrient[0];
        let value = nutrient[1];
        let unit = (nutrientName === "iron" ? "mg" : "g");

        return (
            <li key={index}>{nutrientName}: {value}{unit}<br /></li>
        )
    });

    return (
        <div className="food-item">
            <img src={displayImage[category].src} alt={displayImage[category].alt} />
            <h3>{mealName}</h3>
            <ul>
                {editing ? 
                    <MealEditor 
                        index={index} 
                        onUpdate={(index) => props.onUpdate(index)}
                        onCancel={() => props.onUpdate(-1)}
                    /> 
                    :
                    <div> 
                        {nutrientList}
                        <button onClick={() => props.onUpdate(props.index)}>Edit</button>
                    </div>
                }
            </ul>
        </div>
    );
}