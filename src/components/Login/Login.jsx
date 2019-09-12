import React from 'react';
import {Field, reduxForm} from 'redux-form';

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
        return <div><h1>Lalalagin</h1></div>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}

const LoginForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div><Field component={'input'} placeholder={'username'} name={'login'} /></div>
        <div><Field placeholder={'password'} component={'input'} name={'password'} /></div>
        <div><Field name={'rememberMe'} type={'checkbox'} component={'input'}/></div>
        <div><button>Submit</button></div>
    </form>)
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default Login;