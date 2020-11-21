import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addNewMessageActionCreator, updateNewMessageTextActionCreator } from './../../redux/dialogs-reducer';




const Dialogs = (props) => {

    // let newMessage = React.createRef();

    let addNewMessage = () => {
        props.dispatch(addNewMessageActionCreator());
    };

    let onMessageTextChange = (event) => {
        // debugger
        // let newMessageText = newMessage.current.value;
        let newMessageText = event.target.value;
        props.dispatch(updateNewMessageTextActionCreator(newMessageText));
    };

    let dialogsElements =
        props.state.dialogsPage.dialogsData.map((dialogEl) =>
            <DialogItem name={dialogEl.name} id={dialogEl.id} imgSrc={dialogEl.imgSrc} />)
    let messagesElements =
        props.state.dialogsPage.messagesData.map((messageEl) =>
            <Message message={messageEl.message} addresserYou={messageEl.addresserYou} />)

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea  onChange={onMessageTextChange}
                    value={props.state.dialogsPage.newMessageTextData}></textarea>
                <div>
                    <button onClick={addNewMessage}>получи своё сообщение</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;

