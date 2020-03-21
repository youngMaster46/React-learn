import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getProfile, getStatus, updateStatus, savePhoto, saveProfile } from '../../redux/profile-reducer';
import { compose } from 'redux';

type MatchType = {
    params: {
        userId: number
    }
}
type PropsType = {
    match: MatchType
    authorizedUserId: number
    getProfile: (userId: number) => void
    getStatus: (userId: number) => void
}
type StateType = {
}

class ProfileContainer extends React.Component<PropsType, StateType> {
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
    componentDidUpdate(prevProps:PropsType, prevState:StateType, snapshot:any) {
        if (this.props.match.params.userId !== prevProps.match.params.userId) {
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
    connect(mapStateToProps, { getProfile, getStatus, updateStatus, savePhoto, saveProfile }),
    withRouter
)(ProfileContainer);
