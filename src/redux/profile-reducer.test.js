import React from 'react';
import profileReducer, { addPostActionCreator, deletePost } from './profile-reducer';
import { exportAllDeclaration } from '@babel/types';

let state = {
    postsData: [
        { id: '1', message: 'Hello Max', likesCount: '11' },
        { id: '2', message: 'You are very strong', likesCount: '4' },
        { id: '3', message: 'Hey', likesCount: '99' },
        { id: '4', message: 'Hey', likesCount: '34' },
        { id: '5', message: 'Hey', likesCount: '66' },
        { id: '6', message: 'Hey', likesCount: '23' }
    ]
}

it(`new post should be added`, () => {
    let action = addPostActionCreator('dyadyamosya is right');
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(7);
})

it(`message of new post should be correct`, () => {
    let action = addPostActionCreator('this is here');
    let newState = profileReducer(state, action);
    expect(newState.postsData[6].message).toBe('this is here');
})

// TDD
it('after deleting length of messages should be decrement', () => {
    let action = deletePost(1)
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(5);
})

it(`after deleting length of the array shouldn't be decrement if id is incorrect`, () => {
    let action = deletePost(9999);
    let newState = profileReducer(state, action);
    expect(newState.postsData.length).toBe(6);
})