import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from 'redux-form';

const MyPosts = (props) => {
    
    let postsElements = props.postsData.map( postsEl => <Post key={postsEl.id} message={postsEl.message} likesCount={postsEl.likesCount} /> );

    let addPost = (value) => {
        props.addPost(value.addNewPost);
    }
  
    return (
        <div>
            <h2>My posts</h2>
            <AddPostMessageRedux onSubmit={addPost} />
            <div className={classes.posts}>
                 New post
                 
                {postsElements}
            </div>
        </div>
    );
}

const AddPostMessage = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.form}>
            <Field component='textarea' placeholder='enter your text or message' name='addNewPost' />
            <button>Submit</button>
        </form>
    )
}

const AddPostMessageRedux = reduxForm({form: 'addNewPostMessage'})(AddPostMessage);

export default MyPosts;