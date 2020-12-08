import React from 'react';
import { Field, reduxForm, submit } from 'redux-form';
import { Input } from '../components/Common/FormsControls/FormsControls';
import { required } from './../Utils/Validators/Validaors';
import { LoginThunk } from '../redux/auth-reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import s from './Login.module.css'
import { createField } from './../components/Common/FormsControls/FormsControls';

const LoginForm = ({ handleSubmit, error }) => {
    return (
        <form onSubmit={handleSubmit}>
            {/* createField = (validate, placeholder, component, name, type) */}
            {createField([required], 'Email', Input, 'email', 'text')}
            {createField([required], 'Password', Input, 'password', 'text')}
            {error && <div className={s.formSummeryError}>{error}</div>}
            {createField([], null, Input, 'rememberMe', 'checkbox')}
            <div>
                <button>LOGIN</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)


const Login = ({ LoginThunk, isAuth, passError }) => {

    const onSubmit = (formData) => {
        LoginThunk(formData.email, formData.password, formData.rememberMe)
    }
    if (isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1>login</h1>
            <LoginReduxForm onSubmit={onSubmit} passError={passError} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    passError: state.auth.passError
})

export default connect(mapStateToProps, { LoginThunk })(Login);