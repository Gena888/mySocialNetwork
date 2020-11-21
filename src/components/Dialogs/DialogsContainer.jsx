import React from 'react';
import StoreContext from '../../StoreContext';
import { addNewMessageActionCreator, updateNewMessageTextActionCreator } from './../../redux/dialogs-reducer';
import Dialogs from './Dialogs';





const DialogsContainer = (props) => {

    return (
        <StoreContext.Consumer >
            {
                (store) => {

                    let state = store.getState()

                    let addNewMessage = () => {
                        store.dispatch(addNewMessageActionCreator());
                    };

                    let onMessageTextChange = (text) => {
                        store.dispatch(updateNewMessageTextActionCreator(text));
                    };

                    return <Dialogs sendMessage={addNewMessage}
                        uppdateNewMessageText={onMessageTextChange}
                        dialogsData={state.dialogsPage.dialogsData}
                        messagesData={state.dialogsPage.messagesData}
                        newMessageTextData={state.dialogsPage.newMessageTextData}
                    />
                }
            }

        </StoreContext.Consumer>
    );
}

export default DialogsContainer;

