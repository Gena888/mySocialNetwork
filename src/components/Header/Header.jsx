import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return (
        <header className={s.header}>
            <img src="https://sun1.beltelecom-by-minsk.userapi.com/impf/c847220/v847220418/c6148/DDmHnFk6Uvw.jpg?size=811x959&quality=96&proxy=1&sign=ee3b4d32afdbd5e8cff1545a788a68bd" alt="" />
            <div className={s.loginBlock} >
                {props.isAuth ?
                    props.login
                   : <NavLink to={'/login'} >Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;

