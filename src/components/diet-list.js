import React from 'react';

import PremadeDiet from './premade-diet.js';

export default function DietList() {
    return (
        <div className="Diet-List">
            <PremadeDiet dietName={"No Diet"} restrictions={"I'll eat anything"} />
            <PremadeDiet dietName={"Vegan"} restrictions={"I don't eat animals or the things they produce"} />
            <PremadeDiet dietName={"Vegetarian"} restrictions={"I don't eat meat"} />
            <PremadeDiet dietName={"Pescatarian"} restrictions={"I don't eat meat (except fish)"} />
            <PremadeDiet dietName={"Paleo-diet"} restrictions={"I only eat foods that were available to my ancient ancestors"} />
            <PremadeDiet dietName={"Gluten-free"} restrictions={"I avoid wheat and grains with gluten proteins"} />
        </div>
    );
}