import React from 'react';
import { Field, reduxForm, submit } from 'redux-form';
import { Input } from '../components/Common/FormsControls/FormsControls';
import { required } from './../Utils/Validators/Validaors';
import { LoginThunk } from '../redux/auth-reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required]} placeholder={'Email'} component={Input} name={'email'} />
            </div>
            <div>
                <Field validate={[required]} placeholder={'Password'} component={Input} name={'password'} />
            </div>
            <div>
                <Field component={Input} type="checkbox" name={'rememberMe'} /> remember me
        </div>
            <div>
                <button>LOGIN</button>
            </div>
        </form>
    )
}


const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)





const Login = (props) => {

    const onSubmit = (formData) => {
        props.LoginThunk(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }

    return (
        <div>
            <h1>login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { LoginThunk })(Login);