let state = {
    profilePage: {
        postsData: [
            {id: '1', message: 'Hello Max', likesCount: '11'},
            {id: '2', message: 'You are very strong', likesCount: '4'},
            {id: '3', message: 'Hey', likesCount: '99'},
            {id: '4', message: 'Hey', likesCount: '34'},
            {id: '5', message: 'Hey', likesCount: '66'},
            {id: '6', message: 'Hey', likesCount: '23'}
          ]
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
          ]
    },
    sidebar: {
        friendsList: [
            {name: 'Lilya', id: '1'},
            {name: 'Nastya', id: '2'},
            {name: 'Liza', id: '3'},
        ]
    }
}

export default state;