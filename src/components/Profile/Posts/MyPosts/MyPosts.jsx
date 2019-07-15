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
    return (
        <div>
            <h2>My posts</h2>
            <div className={classes.posts}>
                 New post
                <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
                <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>
                <Post message={postsData[2].message} likesCount={postsData[2].likesCount}/>
                <Post message={postsData[3].message} likesCount={postsData[3].likesCount}/>
                <Post message={postsData[4].message} likesCount={postsData[4].likesCount}/>
                <Post message={postsData[5].message} likesCount={postsData[5].likesCount}/>
            </div>
        </div>
    );
}

export default MyPosts;