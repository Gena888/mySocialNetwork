import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {

    let text = React.createRef();
    // создал пустую ссулку

    let showMessage = () => {
        let messageTest = text.current.value;
        alert (messageTest); 
    }
    // создал функцию которая вытаскивает значение с обьекта по ссылке text 
    // current - обращение к нативному элементу DOM 
    // и функция отображает значение нативного элемента через алерт

    let dialogsElements =
        props.state.dialogsData.map((dialogEl) =>
            <DialogItem name={dialogEl.name} id={dialogEl.id} imgSrc={dialogEl.imgSrc} />)
    let messagesElements =
        props.state.messagesData.map((messageEl) =>
            <Message message={messageEl.message} addresserYou={messageEl.addresserYou} />)
    // создаём массив jsx элементов и передаём пропсам значения из свойств обьектов массива data
    // массив jsx элементов содержит набор jsx элементов, которые в свою очередь отрисовывают
    //  инфу на странице исходя из данных переданных в props

    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                {dialogsElements}
                {/* вставляем массив jsx элементов созданный ранее */}
            </div>

            <div className={s.messages}>
                {messagesElements}
                <textarea ref={text}></textarea>
                {/* привязал ссылку к текст эриа */}
                <div>
                    <button onClick={showMessage}>получи своё сообщение</button>
                    {/* передал переменную обработчику онклик для вызова функции  при клике */}
                </div>
            </div>
        </div>
    );
}

export default Dialogs;

