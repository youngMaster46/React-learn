import React from 'react';
import Header from './Header';
import * as axios from 'axios';
import {connect} from 'react-redux';
import {setAuthUserData} from '../../redux/auth-reducer';
import { statement } from '@babel/template';
import { usersAPI } from '../../api/api';

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.auth();
    }
    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export const auth = () => {
    return (dispatch) => {
        usersAPI.auth().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        })
    }
}

export default connect(mapStateToProps, {setAuthUserData, auth})(HeaderContainer);