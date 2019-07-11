import React from 'react';
import classes from './Post.module.css';;

const Post = (props) => {
    return (
        <div className={classes.item}>
            <img src='https://pbs.twimg.com/profile_images/427365001469235200/6AtFP82E.jpeg' />
            <span>{props.message}</span>
         </div>
    );
}

export default Post;