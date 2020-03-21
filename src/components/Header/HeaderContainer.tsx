import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { getAuthUserData } from '../../redux/auth-reducer';
import { logout } from '../../redux/auth-reducer';
import { AppStateType } from '../../redux/redux-store';

type MapStateToPropsType = {
    isAuth: boolean
    login:null | string
}
type MapDispatchToPropsType = {
    getAuthUserData: () => void
    logout: () => void
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType
type StateType = {}

class HeaderContainer extends React.Component<PropsType, StateType> {
    componentDidMount() {
        this.props.getAuthUserData();
    }
    render() {
        return <Header {...this.props} />
    }
}

let mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, { getAuthUserData, logout })(HeaderContainer);