import * as axios from 'axios';
import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../imagas/no-avatar.png'


const Users = (props) => {
    // debugger

    // if (props.usersData.length === 0) {
    //     props.setUsers([
    //         { id: 1, followed: false, name: 'Gena', Status: 'Learning now', location: { city: 'Minsk', country: 'Belarus' }, photoUrl: 'https://sun1.beltelecom-by-minsk.userapi.com/c847220/v847220418/c6148/DDmHnFk6Uvw.jpg' },
    //         { id: 2, followed: true, name: 'Gleb', Status: 'Seating now', location: { city: 'Moskow', country: 'Russia' }, photoUrl: 'https://sun9-18.userapi.com/cqGGLrpxAgHQf0x5w9-mtcIKXXXNyF50BocQyA/eAjdupisXrU.jp' },
    //         { id: 3, followed: true, name: 'Igor', Status: 'in de house', location: { city: 'London', country: 'Uk' }, photoUrl: 'https://sun1.beltelecom-by-minsk.userapi.com/c844417/v844417074/6d041/N75krJg5dtc.jpg' },
    //         { id: 4, followed: false, name: 'Sasha', Status: 'playing', location: { city: 'Borisov', country: 'Belarus' }, photoUrl: 'https://sun1.beltelecom-by-minsk.userapi.com/c627716/v627716457/2f13c/k4JKIT907iM.jpg' }
    //     ])
    // }



    if (props.usersData.length === 0) {
        debugger

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                debugger;
                props.setUsers(response.data.items)
            });
    }


    return <div>
        {
            props.usersData.map((u) => <div key={u.id}>
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
    </div>
};

export default Users;