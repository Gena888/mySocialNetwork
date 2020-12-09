import React from 'react';
import s from './User.module.css';
import userPhoto from '../../../imagas/no-avatar.png'
import { NavLink } from 'react-router-dom';


let User = ({
    followThunk, unfollowThunk,
    followingInProgress, user, ...props }) => {

    return (
        <div >
            <span>
                <div>
                    <NavLink to={'/Profile/' + user.id}> <img className={s.userPhoto}
                        src={user.photos.small != null ? user.photos.small : userPhoto}
                        alt="" />
                    </NavLink>
                </div>
                <div>
                    {user.followed
                        ? <button
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                unfollowThunk(user.id)
                            }} >unFollow</button>
                        : <button
                            disabled={followingInProgress.some(id => id === user.id)}
                            onClick={() => {
                                followThunk(user.id)
                            }} >Follow</button>}
                </div>
            </span>
            <span>
                <span>
                    <div>{user.name}</div>
                    <div>{user.status}</div>
                </span>
                <span>
                    <div>{'user.location.country'}</div>
                    <div>{'user.location.sity'}</div>
                </span>
            </span>
        </div>
    )
}



export default User;