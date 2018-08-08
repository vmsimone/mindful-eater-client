import React from 'react';

import './premade-diet.css';

export default function PremadeDiet(props) {
    const {dietName, restrictions, iconList} = props;

    // const bg = {background: 'green'}
    //     if (this.state.diet === this.props.dietName) {
    //     bg = {background: 'blue'}
    // }

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
        }
    }

    const icons = iconList.map((icon, index) => {
        return (
            <li key={index} className="mini-icon">
                <img 
                    src={displayImage[icon].src}
                    alt={displayImage[icon].alt}
                />
            </li>
        )  
    });

    return (
        <div className="diet">
            <h3>{dietName}</h3>
            <p>{restrictions}</p>
            <ul className="icon-list">
                {icons}
            </ul>
        </div>
    );
}