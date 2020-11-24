import * as axios from 'axios';
import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../imagas/no-avatar.png'


const Users = (props) => {



    let getUsers = () => {

        if (props.usersData.length === 0) {
            debugger

            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    debugger;
                    props.setUsers(response.data.items)
                });
        }

    }



    return (
        <div>
            <button onClick={getUsers} >getUsers</button>
            {props.usersData.map((u) => <div key={u.id}>
                <span>
                    <div>
                        <img className={s.userPhoto}
                            src={u.photos.small != null ? u.photos.small : userPhoto}
                            alt="" />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unFollow(u.id) }} >unFollow</button>
                            : <button onClick={() => { props.follow(u.id) }} >Follow</button>}
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
        </div>)
};

export default Users;