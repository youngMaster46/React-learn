import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

const MyPostsComponent = (props) => {
    // let store = props.store;
    // let profilePage = store.getState().profilePage;

    // let addPost = () => {
    //     let action = addPostActionCreator();
    //     store.dispatch(action);
    // }

    // let onPostChange = (text) => {
    //     let action = updateNewPostTextActionCreator(text);
    //     store.dispatch( action );
    // }
    return (
    <StoreContext.Consumer>{
        (store) => {
            let profilePage = store.getState().profilePage;
            let addPost = () => {
                let action = addPostActionCreator();
                store.dispatch(action);
            }
        
            let onPostChange = (text) => {
                let action = updateNewPostTextActionCreator(text);
                store.dispatch( action );
            }
        return <MyPosts newPostText={profilePage.newPostText} postsData={profilePage.postsData} updateNewPostText={ onPostChange} addPost={addPost}/>
        }
    }
    </StoreContext.Consumer>
    );

}

export default MyPostsComponent;