import React from 'react';

import './meal.css';

export default function Meal () {
    const mealName = "Meal Name";
    const description = "delicious";
    const imgSrc = "http://lifewelleaten.com/wp-content/plugins/osetin-helper/assets/img/placeholder-category.png";
    return (
      <div class="food-item">
        <img src={imgSrc} />
        <h3>{mealName}</h3>
        <p>{description}</p>
      </div>
    );
}
