import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from './../../Common/Preloader/Preloader';



const ProfileInfo = (props) => {
    // debugger
   
       
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div>
            <div className={s.backgroundImage}>
                <img src="https://v-georgia-com.exactdn.com/wp-content/uploads/2017/08/%D0%9F%D0%BB%D1%8F%D0%B6%D0%91%D0%B0%D1%82%D1%83%D0%BC%D0%B86%D0%97.jpg?lossy=1&quality=60&ssl=1" alt="" />
            </div>
            <div className={s.descriptionBlock}>
                <div>
                    nick name:
                    <div>
                        {props.profile.fullName}
                    </div>

                </div>
                <img src={props.profile.photos.large} alt="" />
                <div> abot me:
                    <div>{props.profile.aboutMe}</div>
                </div>
                <div>
                    <div>occupation:</div>
                    {
                        props.profile.lookingForJob ?
                            'need some money' :
                            'need some sleep'
                    }
                </div>

            </div>
        </div>
    );
}

export default ProfileInfo;