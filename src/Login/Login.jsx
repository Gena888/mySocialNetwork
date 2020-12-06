import React from 'react';
import { Field, reduxForm, submit } from 'redux-form';
import { postLoginDataThunk } from '../redux/auth-reducer';
import { connect } from 'react-redux';
import { Input } from '../components/Common/FormsControls/FormsControls';
import { required } from './../Utils/Validators/Validaors';

const LoginForm = (props) => {
    console.log(props)
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required]} placeholder={'Login'} component={Input} name={'login'} />
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
        console.log(formData)

    }

    return (
        <div>
            <h1>login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login;
