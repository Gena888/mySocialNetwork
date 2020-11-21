import React from 'react';
import { addNewMessageActionCreator, updateNewMessageTextActionCreator } from './../../redux/dialogs-reducer';
import Dialogs from './Dialogs';





const DialogsContainer = (props) => {

    let state = props.store.getState()

    let addNewMessage = () => {
        props.store.dispatch(addNewMessageActionCreator());
    };

    let onMessageTextChange = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text));
    };


    return (
        <Dialogs sendMessage={addNewMessage}
            uppdateNewMessageText={onMessageTextChange}
            dialogsData={state.dialogsPage.dialogsData}
            messagesData={state.dialogsPage.messagesData}
            newMessageTextData={state.dialogsPage.newMessageTextData}
        />
    );
}

export default DialogsContainer;

