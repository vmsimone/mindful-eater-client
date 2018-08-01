import React from 'react';

import './diet-list.css';

import PremadeDiet from './premade-diet.js';

export default function DietList () {
    return (
        <div className="Diet-List">
            <PremadeDiet />
            <PremadeDiet />
            <PremadeDiet />
            <PremadeDiet />
            <PremadeDiet />
        </div>
    );
}