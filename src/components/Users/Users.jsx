import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../imagas/no-avatar.png'
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';



let Users = (props) => {

    let pagesCount =
        Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }



    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className=
                        {props.currentPage === p ? s.selectedPage : s.nonSelectedPage}
                        onClick={() => { props.onPageChanged(p) }} >
                        {p}
                    </span>
                }
                )}

            </div>
            {props.usersData.map((u) => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/Profile/' + u.id}> <img className={s.userPhoto}
                            src={u.photos.small != null ? u.photos.small : userPhoto}
                            alt="" />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {

                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '9612377a-0b39-4432-abc2-9856cf3bb343'
                                    } 
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.unFollow(u.id);
                                        }
                                    });


                            }} >unFollow</button>
                            : <button onClick={() => {

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        'API-KEY': '9612377a-0b39-4432-abc2-9856cf3bb343'
                                    } 
                                })
                                    .then(response => {
                                        if (response.data.resultCode == 0) {
                                            props.follow(u.id);
                                        }
                                    });

                               


                            }} >Follow</button>}


                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.sity'}</div>
                    </span>
                </span>
            </div>)
            }
        </div>
    )
}



export default Users;