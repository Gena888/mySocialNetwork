import React from 'react';
import * as axios from 'axios';
import s from './Users.module.css';
import userPhoto from '../../imagas/no-avatar.png'


class Users extends React.Component {
    constructor(props) {
        super(props);

        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }



    render = () => {
        return (
            <div>
                {this.props.usersData.map((u) => <div key={u.id}>
                    <span>
                        <div>
                            <img className={s.userPhoto}
                                src={u.photos.small != null ? u.photos.small : userPhoto}
                                alt="" />
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => { this.props.unFollow(u.id) }} >unFollow</button>
                                : <button onClick={() => { this.props.follow(u.id) }} >Follow</button>}
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
}



export default Users;