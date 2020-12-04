import { connect } from 'react-redux';
import { addNewMessageActionCreator, updateNewMessageTextActionCreator } from './../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import { withAuthRedirect } from './../../Hoc/withAuthRedirect';
import { compose } from 'redux';


let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageTextData: state.dialogsPage.newMessageTextData,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        uppdateNewMessageText: (text) => {
            dispatch(updateNewMessageTextActionCreator(text));
        },
        sendMessage: () => {
            dispatch(addNewMessageActionCreator());
        }

    }
}





export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)

