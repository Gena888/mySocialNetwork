import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../imagas/no-avatar.png'
import { NavLink } from 'react-router-dom';
import { API } from '../../api/api';


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

                                API.unfollowUser(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
                                            props.unFollow(u.id);
                                        }
                                    });


                            }} >unFollow</button>
                            : <button onClick={() => {

                               API.followUser(u.id)
                                    .then(data => {
                                        if (data.resultCode === 0) {
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