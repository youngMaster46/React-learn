import React from 'react';
import classes from './MyPosts.module.css';import Post from './Post/Post';
;

const MyPosts = () => {
    return (
        <div>
            My posts
            <div className={classes.posts}>
                 New post
                <Post message='Hello Max'/>
                <Post message='You are very strong'/>
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    );
}

export default MyPosts;