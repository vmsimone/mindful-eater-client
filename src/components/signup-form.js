import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import {connect} from 'react-redux';
import {Link, Redirect} from 'react-router-dom';

import {login} from '../actions/auth';
import {registerUser} from '../actions/users';
import {required, nonEmpty, matches, length, isTrimmed} from '../validators';
import Input from './input';

import './signup-form.css';

const passwordLength = length({min: 6, max: 20});
const matchesPassword = matches('password');

export class SignUp extends React.Component {
    demoMode() {
        return this.props.dispatch(login("Demo User", "123456"));
    }

    onSubmit(data) {
        const {username, password} = data;
        const user = {username, password};
        return this.props
            .dispatch(registerUser(user))
            .then(() => this.props.dispatch(login(username, password)));
    }

    render() {
        if (this.props.username) {
            return (
                <Redirect to="/home" />
            );
        }
        return (
            <div className="signup">
                <h2>Sign Up</h2>
                <form
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                    <label htmlFor="username">username:</label>
                    <Field 
                        name="username" 
                        component={Input} 
                        type="text" 
                        validators={[required, nonEmpty, isTrimmed]} 
                    />
                    <label htmlFor="password">password:</label>
                    <Field 
                        name="password" 
                        component={Input}
                        type="password" 
                        validators={[required, passwordLength, isTrimmed]} 
                    />
                    <label htmlFor="confirm-password">confirm:</label>
                    <Field 
                        name="confirm-password" 
                        component={Input}
                        type="password" 
                        validators={[required, nonEmpty, matchesPassword]}
                    />
                    <button 
                        type="submit" 
                        disabled={this.props.pristine || this.props.submitting}
                    >
                        Sign Up!
                    </button>
                    <p>or</p>
                    <Link 
                        className="sampler" 
                        to="/home"
                        onClick={() => this.demoMode()}
                    >try sampling the app as a demo user</Link>
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    username: state.mindful.username
});

SignUp = connect(mapStateToProps)(SignUp);

export default reduxForm({
    form: 'signup',
    onSubmitFail: (errors, dispatch) => dispatch(focus('signup', Object.keys(errors)[0]))
})(SignUp);