import React from 'react';
import s from './Dialogs.module.css'
import { NavLink } from 'react-router-dom';


const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>

            <div className={s.dialogsItems}>
                <div className={s.dialog + ' ' + s.active}>
                    <NavLink to="/dialogs/1">gena</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/2">sasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">dima</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">pasha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">gleb</NavLink>
                </div>

            </div>

            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>how are your site </div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    );
}

export default Dialogs;