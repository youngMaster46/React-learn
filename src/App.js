import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { initializedApp } from './redux/app-reducer';
import { connect } from 'react-redux';
import { compose } from '../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';
import Preloader from './components/common/Preloader/Preloader';


class App extends React.Component {
  DComponent = () => <DialogsContainer store={this.props.store} />
  DProfile = () => <ProfileContainer store={this.props.store} />

  componentDidMount() {
    this.props.initializedApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route render={this.DComponent} path='/dialogs' />
          <Route render={this.DProfile} path='/profile/:userId?' />
          <Route render={() => <UsersContainer />} path='/users' />
          <Route component={News} path='/news' />
          <Route path='/login' render={() => <LoginPage />} />

        </div>

      </div>
    );
  }

}
let mapStateToProps = (state) => ({
  initialized: state.app.initialized
})
export default compose( // there was withRouter
  connect(mapStateToProps, { initializedApp }))(App);
