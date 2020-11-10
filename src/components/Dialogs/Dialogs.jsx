import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={"/dialogs/" + props.id}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    );
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                <DialogItem name='gena' id='1' />
                <DialogItem name='sasha' id='2' />
                <DialogItem name='dima' id='3' />
                <DialogItem name='pasha' id='4' />
                <DialogItem name='gleb' id='5' />
            </div>

            <div className={s.messages}>
               <Message message='hi'/>
               <Message message='how are you'/>
               <Message message='yo'/>
            </div>
        </div>
    );
}

export default Dialogs;