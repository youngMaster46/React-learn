import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {
   
    let postsElements = props.postsData.map( postsEl => <Post message={postsEl.message} likesCount={postsEl.likesCount} /> );

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