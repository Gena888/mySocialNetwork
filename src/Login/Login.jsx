import React from 'react';
import { Field, reduxForm, submit } from 'redux-form';
import { postLoginDataThunk } from '../redux/auth-reducer';
import { connect } from 'react-redux';

const LoginForm = (props) => {
    console.log(props)
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'Login'} component={'input'} name={'login'} />
            </div>
            <div>
                <Field placeholder={'Password'} component={'input'} name={'password'} />
            </div>
            <div>
                <Field component={'input'} type="checkbox" name={'rememberMe'} /> remember me
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
        // console.log(formData)
        postLoginDataThunk(formData);

    }

    return (
        <div>
            <h1>login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

// export default Login;

let mapStateToProps = (state) => ({

})



export default connect(mapStateToProps, {postLoginDataThunk})(Login)