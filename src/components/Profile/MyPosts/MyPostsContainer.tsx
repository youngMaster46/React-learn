import { addPostActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import {connect} from 'react-redux';
import { AppStateType } from '../../../redux/redux-store';
import { PostType } from '../../../../types/types';

type MapStateToPropsType = {
    postsData: Array<PostType> 
}
type MapDispatchToPropsType = {
    addPost: (value:string) => void
}
type OwnStatePropsType = {
}
let mapStateToProps = (state: AppStateType):MapStateToPropsType => {
    return {
        postsData: state.profilePage.postsData
    }
}
let mapDispatchToProps = (dispatch:any):MapDispatchToPropsType => {
    return {
        addPost: (value) => {
            let action = addPostActionCreator(value);
            dispatch(action);
        },
    }
}
const MyPostsComponent = connect<MapStateToPropsType, MapDispatchToPropsType, OwnStatePropsType, AppStateType>(mapStateToProps, mapDispatchToProps)(MyPosts);
export default MyPostsComponent;