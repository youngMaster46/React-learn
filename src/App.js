import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import News from './components/News/News';

const SomeComponent = () =>  <Dialogs dialogsData={dialogsData} messagesData={messagesData}/>

let dialogsData = [
  {name: 'Max', id: '1'},
  {name: 'Dimych', id: '2'},
  {name: 'Vitya', id: '3'},
  {name: 'Dyadya', id: '4'}
];


let messagesData = [
  {id: '1', message: 'I am Jack. Nice to meet you, Sandra'},
  {id: '2', message: 'Glad to see you too, Jack. Are you alone at this party?'},
  {id: '3', message: 'Yes, I am. My friend has fallen ill today and decided to stay at home. And you?'}
];





function App() {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Navbar />
     <div className='app-wrapper-content'>
      <Route render={SomeComponent}  path='/dialogs' />
      <Route component={Profile} path='/profile' />
      <Route component={News} path='/news' />
     </div>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
