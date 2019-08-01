import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import News from './components/News/News';
import DialogsContainer from './components/Dialogs/DialogsContainer';

function App(props) {
  const DComponent = () =>  <DialogsContainer store={props.store} />
  const DProfile = () => <Profile store={props.store}/> 

  return (
    <div className="app-wrapper">
      <Header />
      <Navbar/>
     <div className='app-wrapper-content'>
      <Route render={DComponent}  path='/dialogs' />
      <Route render={DProfile} path='/profile' />
      <Route component={News} path='/news' />
     </div>
      
    </div>
  );
}

export default App;
