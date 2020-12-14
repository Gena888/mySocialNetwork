import React from 'react';
import s from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from './../Common/FormsControls/FormsControls';
import { maxLengthCreator, required } from './../../Utils/Validators/Validaors';



const Dialogs = (props) => {

    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody);
    };

    let dialogsElements =
        props.dialogsData.map((dialogEl) =>
            <DialogItem paramsUserId={props.match.params.userId} key={dialogEl.id} name={dialogEl.name} id={dialogEl.id} imgSrc={dialogEl.imgSrc} />)
    let messagesElements =
        props.messagesData.map((messageEl) =>
            <Message key={messageEl.id} message={messageEl.message} addresserYou={messageEl.addresserYou} />)



    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <AddMessageFormRedux onSubmit={addNewMessage} />
            </div>
        </div>
    );
}

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field validate={[required, maxLength50]} component={Textarea} name={'newMessageBody'} placeholder={'Enter your message'} />

            <div>
                <button>Send a Message</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm);

export default Dialogs;



