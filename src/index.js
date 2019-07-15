import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

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
  
  let postsData = [
    {id: '1', message: 'Hello Max', likesCount: '11'},
    {id: '2', message: 'You are very strong', likesCount: '4'},
    {id: '3', message: 'Hey', likesCount: '99'},
    {id: '4', message: 'Hey', likesCount: '34'},
    {id: '5', message: 'Hey', likesCount: '66'},
    {id: '6', message: 'Hey', likesCount: '23'}
  ];
  

ReactDOM.render(<App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData} />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
