import React from 'react';
import s from './Profile.module.css';

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://v-georgia-com.exactdn.com/wp-content/uploads/2017/08/%D0%9F%D0%BB%D1%8F%D0%B6%D0%91%D0%B0%D1%82%D1%83%D0%BC%D0%B86%D0%97.jpg?lossy=1&quality=60&ssl=1" alt="" />
            </div>
            <div>
                ava + discription
            </div>
            <div className={s.posts}>
                my posts
                <div className={s.item}>
                    new post
                </div>
            </div>
            <div className={s.item}>
                post 1
            </div>
            <div className={s.item}>
                post 2
            </div>

        </div>
    );
}

export default Profile;