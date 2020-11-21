import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { addNewMessageActionCreator, updateNewMessageTextActionCreator } from './../../redux/dialogs-reducer';




const Dialogs = (props) => {


    let addNewMessage = () => {
        props.sendMessage();
        // props.dispatch(addNewMessageActionCreator());
    };

    let onMessageTextChange = (event) => {
        let text = event.target.value;
        props.uppdateNewMessageText(text);
       
        // props.dispatch(updateNewMessageTextActionCreator(newMessageText));
    };

    let dialogsElements =
        props.dialogsData.map((dialogEl) =>
            <DialogItem name={dialogEl.name} id={dialogEl.id} imgSrc={dialogEl.imgSrc} />)
    let messagesElements =
        props.messagesData.map((messageEl) =>
            <Message message={messageEl.message} addresserYou={messageEl.addresserYou} />)

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <textarea  onChange={onMessageTextChange}
                    value={props.newMessageTextData}></textarea>
                <div>
                    <button onClick={addNewMessage}>получи своё сообщение</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;

