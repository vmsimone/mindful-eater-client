import React from 'react';

import './meal.css';

export default function Meal () {
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
        src: "https://image.flaticon.com/icons/svg/184/184581.svg"
    },
    "dairy": {
        alt: "dairy",
        src: "https://freeiconshop.com/wp-content/uploads/edd/cheese-outline-filled.png"
    }
  }

  const mealName = "Meal Name";
  const description = "delicious";

  return (
    <div class="food-item">
      <img src={displayImage["vegetables"].src} alt={displayImage["vegetables"].alt} />
      <h3>{mealName}</h3>
      <p>{description}</p>
    </div>
  );
}
