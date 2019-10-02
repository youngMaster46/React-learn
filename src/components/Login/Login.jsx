import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, createField } from '../common/FormControls/FormControls';
import { requiredField, maxLengthCreator } from '../../utils/validators/validators';
import { login } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import styles from '../common/FormControls/FormControls.module.css';

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }
    if (props.isAuth) {
        return <Redirect to={"/profile"} />
    }
    return (

        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    );
}
let maxLength30 = maxLengthCreator(30);
const LoginForm = ({ error, handleSubmit, captchaUrl }) => {
    return (<form onSubmit={handleSubmit}>
        {createField('username', 'email', [requiredField, maxLength30], Input, {}, '')}
        {createField('password', 'password', [requiredField, maxLength30], Input, { type: 'password' }, '')}
        {createField('', 'rememberMe', [], 'input', { type: 'checkbox' }, '')}
        <div>
            <button>Submit</button>
        </div>
        
        {captchaUrl && <img src={captchaUrl} />}
        {captchaUrl && createField('Enter symbols from image', 'captcha', [requiredField], Input, {} )}

        {error && <div className={styles.commonError}>{error}</div>}
    </form>)
}

const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

let mapStateToProps = (state) => ({
    captchaUrl: state.auth.captchaUrl,
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login })(Login);