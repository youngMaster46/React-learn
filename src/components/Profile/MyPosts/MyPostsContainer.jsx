import { addPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';

let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        postsData: state.profilePage.postsData
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (value) => {
            let action = addPostActionCreator(value);
            dispatch(action);
        },
    }
}
const MyPostsComponent = connect(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsComponent;