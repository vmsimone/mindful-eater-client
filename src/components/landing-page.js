import React from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

import './landing-page.css';

export function LandingPage(props) {
    if (props.loggedIn) {
        return <Redirect to="/home" />;
    }

    return (
            <div className="landing-page">
                <main>
                    <h1>Mindful Eater</h1>
                    <section className="explain">
                        <h3>Keep track of your eating habits</h3>
                        <p>
                        Are you trying to eat healthy, but don't know where to begin? Does it 
                        feel like you need a nutritionist whispering in your ear? How many breads 
                        have you eaten? Relax, we're here to help. Track your eating habits and 
                        make better choices with Mindful Eater.
                        </p>
                    </section>
                    <section className="feature-1">
                        <h3>Be aware of what you use for nourishment</h3>
                        <p>
                        We believe that the most important part of eating right is awareness. 
                        Keep track of what you eat every day and monitor your weekly or monthly 
                        habits.
                        </p>
                    </section>
                    <section className="feature-2">
                        <h3>Track the important stuff</h3>
                        <p>
                        Mindful Eater tracks six of the most important nutrients,
                        so you don't have to worry about every single ingredient.
                        If you're looking to hulk up, focus on iron and protein. 
                        Trying to lose weight? Watch sugars and fats. Mindful Eater makes 
                        daily eating suggestions based on your intake.
                        </p>
                    </section>
                    <section className="feature-3">
                        <h3>Get personalized results</h3>
                        <p>
                        Do you have dietary restrictions? Tell Mindful Eater 
                        what kind of diet you have and it will adapt its recommendations to fit 
                        your needs. Vegetarians lacking in iron will get recommendations for 
                        spinach instead of steak.
                        </p>
                    </section>
                </main>
            </div>
    );
}

const mapStateToProps = state => ({
    loggedIn: state.auth.currentUser !== null
});

export default connect(mapStateToProps)(LandingPage);