import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm} from 'redux-form';
import { Textarea } from '../../common/FormControls/FormControls';
import { requiredField, maxLengthCreator } from '../../../utils/validators/validators';

const MyPosts = React.memo(props => {
    
    let postsElements = props.postsData.map( postsEl => <Post key={postsEl.id} message={postsEl.message} likesCount={postsEl.likesCount} /> );

    let addPost = (value) => {
        props.addPost(value.addNewPost);
    }
  console.log('hello')
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
})

let maxLength30 = maxLengthCreator(30);
const AddPostMessage = (props) => {
    return (
        <form onSubmit={props.handleSubmit} className={classes.form}>
            <Field component={Textarea} placeholder='enter your text or message' name='addNewPost' validate={[requiredField, maxLength30]} />
            <button>Submit</button>
        </form>
    )
}

const AddPostMessageRedux = reduxForm({form: 'addNewPostMessage'})(AddPostMessage);

export default MyPosts;