import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getProfile, getStatus, updateStatus, savePhoto, saveProfile} from '../../redux/profile-reducer';
import {Redirect} from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from '../../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';


class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }
    componentDidMount() {
        this.refreshProfile();
       
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }
    render() {
        //if (!this.props.isAuth) return <Redirect to='/login' />

        return (<Profile 
            {...this.props} 
            profile={this.props.profile} 
            isOwner={!this.props.match.params.userId}
            savePhoto={this.props.savePhoto}
            saveProfile={this.props.saveProfile}
            />)
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth
})

export default compose(
    connect(mapStateToProps, {getProfile, getStatus, updateStatus, savePhoto, saveProfile}),
    withRouter
)(ProfileContainer);
