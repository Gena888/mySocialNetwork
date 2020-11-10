import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink activeClassName={s.active} to="/Profile">Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.active} to="/Dialogs">Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.active} to="/News">News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.active} to="/Music">Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink activeClassName={s.active} to="/Settings">Settings</NavLink>
            </div>
        </nav>
    );
}

export default Nav;
