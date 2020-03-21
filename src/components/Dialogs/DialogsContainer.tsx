import { addMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';
import { AppStateType } from '../../redux/redux-store';
import { DialogType, MessageType } from '../../../types/types';

type MapStateToPropsType = {
    dialogsPage: {
        dialogsData: Array<DialogType>
        messagesData: Array<MessageType>
    }
}
type MapDispatchToPropsType = {
    addMessage: (message:string) => void
}
type PropsType = MapStateToPropsType & MapDispatchToPropsType
let mapStateToProps = (state:AppStateType):MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch:any) => {
    return {
        addMessage: (message:string) => {
            dispatch(addMessageActionCreator(message));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);


 