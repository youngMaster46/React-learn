
import * as serviceWorker from './serviceWorker';
import state, { subscribe } from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {addPost, updateNewPostText} from './redux/state';
import {addMessage, updateMessageText} from './redux/state';

let rerenderEntireTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} updateNewPostText={updateNewPostText} addPost={addPost} updateMessageText={updateMessageText} addMessage={addMessage} />
    </BrowserRouter>,
     document.getElementById('root'));
}
rerenderEntireTree(state);

subscribe(rerenderEntireTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
