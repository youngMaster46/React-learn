import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';





function App(props) {
  const DComponent = () =>  <Dialogs state={props.state.dialogsPage} />
  const DProfile = () => <Profile state = {props.state.profilePage}/>

  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar state={props.state.sidebar}/>
     <div className='app-wrapper-content'>
      <Route render={DComponent}  path='/dialogs' />
      <Route render={DProfile} path='/profile' />
      <Route component={News} path='/news' />
     </div>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
