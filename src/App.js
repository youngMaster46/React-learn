import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { Route } from 'react-router-dom';
import News from './components/News/News';
import UsersContainer from './components/Users/UsersContainer';

//import DialogsContainer from './components/Dialogs/DialogsContainer';
//import ProfileContainer from './components/Profile/ProfileContainer';

import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';
import { initializedApp } from './redux/app-reducer';
import { connect } from 'react-redux';
import { compose } from '../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';
import Preloader from './components/common/Preloader/Preloader';
import store from './redux/redux-store';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { withSuspense } from './hoc/withSuspense';

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

class App extends React.Component {
  // DComponent = () =>
  //   <React.Suspense fallback={<div>Loading... for Bagda Max</div>}>
  //     <DialogsContainer store={this.props.store} />
  //   </React.Suspense>
  // DProfile = () =>
  //   <React.Suspense fallback={<div>Loading... for Bagda Max</div>}>
  //     <ProfileContainer store={this.props.store} />
  //   </React.Suspense>

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
          <Route render={withSuspense(DialogsContainer)} path='/dialogs' />
          <Route render={withSuspense(ProfileContainer)} path='/profile/:userId?' />
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

let AppContainer = compose( // there was withRouter
  connect(mapStateToProps, { initializedApp }))(App);

let SamuraiJSApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default SamuraiJSApp;
