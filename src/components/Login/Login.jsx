import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { Input } from '../common/FormControls/FormControls';
import { requiredField, maxLengthCreator } from '../../utils/validators/validators';

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
let maxLength11 = maxLengthCreator(11);
const LoginForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div><Field component={Input} placeholder={'username'} name={'login'} validate={[requiredField, maxLength11]}/></div>
        <div><Field placeholder={'password'} component={Input} name={'password'} validate={[requiredField, maxLength11]}/></div>
        <div><Field name={'rememberMe'} type={'checkbox'} component={'input'}/></div>
        <div><button>Submit</button></div>
    </form>)
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

export default Login;