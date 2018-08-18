import React from 'react';
import {reduxForm, Field} from 'redux-form';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import './signup-form.css';

export class Login extends React.Component {
    onSubmit(data) {
        console.log(`username is ${data.username}`);
        console.log(`Password is ${data.password}`);
        if(data) {

        }
    }

    render() {
        return (
            <div className="signup">
                <h2>Sign Up</h2>
                <form
                onSubmit={this.props.handleSubmit(values =>
                    this.onSubmit(values)
                )}>
                    <label htmlFor="username">username:</label>
                    <Field name="username" component="input" type="text" required />
                    <label htmlFor="password">password:</label>
                    <Field name="password" component="input" type="password" required />
                    <label htmlFor="confirm-password">confirm:</label>
                    <Field name="confirm-password" component="input" type="password" required />

                    <button type="submit">Sign up!</button>
                    <p>or</p>
                    <Link className="sampler" to="/home">try sampling the app as a demo user</Link>
                </form>
            </div>
        );
    }
}

Login = connect()(Login);

export default reduxForm({
    form: 'login'
})(Login);