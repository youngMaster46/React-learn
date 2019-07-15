import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = () => {
    let postsData = [
        {id: '1', message: 'Hello Max', likesCount: '11'},
        {id: '2', message: 'You are very strong', likesCount: '4'},
        {id: '3', message: 'Hey', likesCount: '99'},
        {id: '4', message: 'Hey', likesCount: '34'},
        {id: '5', message: 'Hey', likesCount: '66'},
        {id: '6', message: 'Hey', likesCount: '23'}
    ];
    let postsElements = postsData.map( postsEl => <Post message={postsEl.message} likesCount={postsEl.likesCount} /> );

    return (
        <div>
            <h2>My posts</h2>
            <div className={classes.posts}>
                 New post
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;