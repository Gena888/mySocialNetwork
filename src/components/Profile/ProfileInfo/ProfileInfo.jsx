import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from './../../Common/Preloader/Preloader';

//!! урок 59 вытащить из профайла остальную инфу, сформировать её как то на странице. 

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.backgroundImage}>
                <img src="https://v-georgia-com.exactdn.com/wp-content/uploads/2017/08/%D0%9F%D0%BB%D1%8F%D0%B6%D0%91%D0%B0%D1%82%D1%83%D0%BC%D0%B86%D0%97.jpg?lossy=1&quality=60&ssl=1" alt="" />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt="" />
                <div> abot me:
                    <div>{props.profile.aboutMe}</div>
                </div>
               

            </div>
        </div>
    );
}

export default ProfileInfo;