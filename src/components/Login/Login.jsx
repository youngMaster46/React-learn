import React from 'react';
import {Field, reduxForm} from 'redux-form';
import { Input } from '../common/FormControls/FormControls';
import { requiredField, maxLengthCreator } from '../../utils/validators/validators';
import {login} from '../../redux/auth-reducer';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';
import styles from '../common/FormControls/FormControls.module.css';

const Login = (props) => {
    
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    } 
    return (
        
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
    );
}
let maxLength30 = maxLengthCreator(30);
const LoginForm = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div><Field component={Input} placeholder={'username'} name={'email'} validate={[requiredField, maxLength30]}/></div>
        <div><Field placeholder={'password'} component={Input} type='password' name={'password'} validate={[requiredField, maxLength30]}/></div>
        <div><Field name={'rememberMe'} type={'checkbox'} component={'input'}/></div>
        <div><button>Submit</button></div>
        {props.error && <div className={styles.commonError}>{props.error}</div>}
    </form>)
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login);