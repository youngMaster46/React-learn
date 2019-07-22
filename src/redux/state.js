let store = {
  _state: {
    profilePage: {
        postsData: [
            {id: '1', message: 'Hello Max', likesCount: '11'},
            {id: '2', message: 'You are very strong', likesCount: '4'},
            {id: '3', message: 'Hey', likesCount: '99'},
            {id: '4', message: 'Hey', likesCount: '34'},
            {id: '5', message: 'Hey', likesCount: '66'},
            {id: '6', message: 'Hey', likesCount: '23'}
          ],
        newPostText: 'it-kamasutra.pro'
    },
    dialogsPage: {
        messagesData: [
            {id: '1', message: 'I am Jack. Nice to meet you, Sandra'},
            {id: '2', message: 'Glad to see you too, Jack. Are you alone at this party?'},
            {id: '3', message: 'Yes, I am. My friend has fallen ill today and decided to stay at home. And you?'}
          ],
          dialogsData: [
            {name: 'Max', id: '1'},
            {name: 'Dimych', id: '2'},
            {name: 'Vitya', id: '3'},
            {name: 'Dyadya', id: '4'}
          ],
          newMessageText: 'zavitok-kursk.ru'

    },
    sidebar: {
        friendsList: [
            {name: 'Lilya', id: '1'},
            {name: 'Nastya', id: '2'},
            {name: 'Liza', id: '3'},
        ]
    }
  },
  _callSubscriber() {
    console.log('state is changed');
  },

  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },

 
  dispatch(action) {
    if (action.type === 'ADD-POST') {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0
      };
      this._state.profilePage.postsData.push(newPost);
      this._state.profilePage.newPostText = '';
      this._callSubscriber(this._state);
    }
    else if (action.type === 'UPDATE-NEW-POST-TEXT') {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    }
    else if (action.type === 'ADD-MESSAGE') {
      let newMessage = {
        id: 8,
        message: this._state.dialogsPage.newMessageText
      };
    
      this._state.dialogsPage.messagesData.push(newMessage);
      this._state.dialogsPage.newMessageText = '';
      this._callSubscriber(this._state);
    }
    else if (action.type === 'UPDATE-MESSAGE-TEXT') {
      this._state.dialogsPage.newMessageText = action.newText;
      this._callSubscriber(this._state);
    }
  }
};

export default store;
window.store = store