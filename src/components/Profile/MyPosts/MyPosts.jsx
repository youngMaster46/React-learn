import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updateNewPostTextActionCreator} from '../../../redux/state';

const MyPosts = (props) => {
    
    let postsElements = props.postsData.map( postsEl => <Post message={postsEl.message} likesCount={postsEl.likesCount} /> );

    let newPostElement = React.createRef();

    let addPost = () => {
       let text = newPostElement.current.value;
       props.dispatch(addPostActionCreator());
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.dispatch( updateNewPostTextActionCreator(text) );
    }
    return (
        <div>
            <h2>My posts</h2>
            <div className={classes.form}>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>
                <button onClick={addPost}  >Hello</button>
            </div>
            <div className={classes.posts}>
                 New post
                 
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;