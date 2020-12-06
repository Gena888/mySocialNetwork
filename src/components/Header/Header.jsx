import React from 'react';
import s from './Header.module.css';
import { NavLink } from 'react-router-dom';
import no_ava from '../../imagas/no-avatar.png';

const Header = (props) => {
    let srcOfImg = '';
    // debugger
    if (props.state.photos != null) {

        if (props.isAuth && props.state.photos.small != null) {
            srcOfImg = props.state.photos.small;
        } else {
            srcOfImg = no_ava;
        }
    }

    // debugger
    return (

        <header className={s.header}>
            <img src="https://sun1.beltelecom-by-minsk.userapi.com/impf/c847220/v847220418/c6148/DDmHnFk6Uvw.jpg?size=811x959&quality=96&proxy=1&sign=ee3b4d32afdbd5e8cff1545a788a68bd" alt="" />
            <div className={s.loginBlock} >

                {props.state.photos
                    ? <NavLink to={'/Profile/' + props.state.userId}>
                        <img src={srcOfImg} alt="small-avatar" />
                    </NavLink>
                    : <div></div>
                }





                {props.isAuth  
                    ? <div>{props.login} - <button onClick={props.LogoutThunk}>Logout</button></div> 
                    : <NavLink to={'/Login'} >Login</NavLink>
                }
            </div>
        </header>
    );
}

export default Header;

