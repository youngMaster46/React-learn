import { addMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from '../../../../../../AppData/Local/Microsoft/TypeScript/3.6/node_modules/redux';

let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (message) => {
            dispatch(addMessageActionCreator(message));
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);


 