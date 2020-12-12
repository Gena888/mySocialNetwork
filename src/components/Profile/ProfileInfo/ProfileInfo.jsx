import React, { useState } from 'react';
import s from './ProfileInfo.module.css';
import Preloader from './../../Common/Preloader/Preloader';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';
import { isUserImgLarge } from '../../Common/UserPhoto/UserPhoto';
import ProfileDataForm from './ProfileDataForm';

const ProfileInfo = ({
    profile, updateStatusThunk, status, isOwner, savePhotoThunk, saveProfileThunk }) => {

    const [editMode, setEditMode] = useState(false);

    console.log(profile)
    if (!profile) {
        return <Preloader />
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            savePhotoThunk(e.target.files[0])
        }
    }

    const onSubmit = (formData) => {
        saveProfileThunk(formData)
        setEditMode(false)
    }

    return (
        <div>
            <div className={s.backgroundImage}>
                <img src="https://v-georgia-com.exactdn.com/wp-content/uploads/2017/08/%D0%9F%D0%BB%D1%8F%D0%B6%D0%91%D0%B0%D1%82%D1%83%D0%BC%D0%B86%D0%97.jpg?lossy=1&quality=60&ssl=1" alt="" />
            </div>
            <div className={s.descriptionBlock}>
                {/* img */}
                <img className={s.userPhoto}

                    src={isUserImgLarge(profile)} alt="profilePhoto" />
                {isOwner && <input type={'file'} onChange={onMainPhotoSelected} />}

                {/* status */}
                <ProfileStatusWithHooks
                    status={status}
                    updateStatusThunk={updateStatusThunk} />

                {editMode
                    ? <ProfileDataForm
                        initialValues={profile}
                        onSubmit={onSubmit}
                    />
                    : <ProfileData
                        profile={profile}
                        isOwner={isOwner}
                        goToEditMode={() => { setEditMode(true) }}
                    />}


            </div>
        </div>
    );
}

const ProfileData = ({ profile, isOwner, goToEditMode }) => {
    return (
        <div>

            {isOwner &&
                <div>
                    <button onClick={goToEditMode}>edit</button>
                </div>}

            {/* full name */}
            <div>
                <b>Full name: </b>
                {profile.fullName}
            </div>

            {/* aboutme */}
            <div>
                <b>abot me: </b>
                {profile.aboutMe}
            </div>
            {/* jobb */}
            <div>
                <b>Looking wor a job: </b>
                {profile.lookingForJob
                    ? 'yes'
                    : 'no'}
            </div>
            {/* job descriptoin */}
            <div>
                <b>My professional skills: </b>
                {profile.lookingForAJobDescription}
            </div>
            <div>
                <b>Contacts: </b>
                {Object.keys(profile.contacts).map(key => {
                    return <Contact key={key} contactTitel={key} ContactValue={profile.contacts[key]} />
                })}
            </div>
        </div >
    )
}




export const Contact = ({ contactTitel, ContactValue }) => {
    return (
        <div className={s.contact}>
            <b>{contactTitel}: </b>{ContactValue}
        </div>
    )

}

export default ProfileInfo;