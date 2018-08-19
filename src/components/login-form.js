import React from 'react';
import {reduxForm, Field, focus} from 'redux-form';
import {Link} from 'react-router-dom';

import {required, nonEmpty} from '../validators';
import Input from './input';
import {login} from '../actions/auth';

import './login-form.css';

export class Login extends React.Component {
    onSubmit(data) {
        console.log('submitted');
        return this.props.dispatch(login(data.username, data.password));
    }

    demoMode() {
        return this.props.dispatch(login("Demo User", "123456"));
    }

    render() {
        let error;
        if (this.props.error) {
            error = (
                <div className="form-error" aria-live="polite">
                    {this.props.error}
                </div>
            );
        }
        return (
            <div className="login-page">
                <h2>Log In</h2>
                <form
                    onSubmit={this.props.handleSubmit(values =>
                        this.onSubmit(values)
                    )}
                >
                    {error}
                    <label htmlFor="username">username:</label>
                    <Field 
                        name="username" 
                        component={Input} 
                        type="text" 
                        validate={[required, nonEmpty]}
                    />
                    <label htmlFor="password">password:</label>
                    <Field 
                        name="password" 
                        component={Input}
                        type="password" 
                        validate={[required, nonEmpty]}
                    />
                    <button 
                        type="submit" 
                        disabled={this.props.pristine || this.props.submitting}
                    >
                        Log in
                    </button>
                    <p>or</p>
                    <Link 
                        className="sampler" 
                        to="/home"
                        onClick={() => this.demoMode()}
                    >
                        try sampling the app as a demo user
                    </Link>
                </form>
            </div>
        );
    }
}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username'))
})(Login);