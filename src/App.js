import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import {Route} from 'react-router-dom';
import News from './components/News/News';
import UsersContainer from './components/Users/UsersContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/Login';

function App(props) {
  const DComponent = () =>  <DialogsContainer store={props.store} />
  const DProfile = () => <ProfileContainer store={props.store}/> 
  

  return (
    <div className="app-wrapper">
      <HeaderContainer />
      <Navbar/>
     <div className='app-wrapper-content'>
      <Route render={DComponent}  path='/dialogs' />
      <Route render={DProfile} path='/profile/:userId?' />
      <Route render={() => <UsersContainer/>} path='/users' />
      <Route component={News} path='/news' />
      <Route path='/login' render={() => <LoginPage />} />
      
     </div>
      
    </div>
  );
}

export default App;
